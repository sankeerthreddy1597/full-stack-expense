const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

// Register controller
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

// Login controller
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(new ErrorResponse("Please enter email and password", 401));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      next(new ErrorResponse("Invalid Credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      next(new ErrorResponse("Invalid credentials", 404));
    }

    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Forgot Password Controller
exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    //Add urlbase to env file
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `
      <h1>You have requested for a password reset</h1>
      <p>Please use the following link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Expense Tracker: Password Reset Request",
        text: message,
      });

      res.status(200).json({
        success: true,
        data: "Email sent!",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

//Reset Password Controllee
exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid reset token"), 400);
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};

//Send JWT signed Token for login and registration
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
