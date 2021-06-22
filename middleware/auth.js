const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = await req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authrorized to access this route", 401));
  }

  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    // const user = User.findById(decode.id);

    // if (!user) {
    //   return next(new ErrorResponse("No user found with this ID", 404));
    // }

    // req.user = user;
    // res.locals.user = user;

    //Using the rr, docs method to send data from middleware to route
    let userData;
    await User.findById(decode.id, function (err, docs) {
      if (err) {
        return next(new ErrorResponse("No user found with this ID", 404));
      } else {
        userData = docs;
      }
    });
    req.user = userData;
    res.locals.user = userData;
    next();
  } catch (error) {
    console.log("Error: " + error);
    return next(new ErrorResponse("Error accessing this route", 401));
  }
};
