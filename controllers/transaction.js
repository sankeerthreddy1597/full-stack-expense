const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.getTransactions = async (req, res, next) => {
  try {
    const user = await req.user;
    res.status(200).json({
      success: true,
      transactions: user.transactions,
    });
  } catch (error) {}
};

exports.addTransaction = async (req, res, next) => {
  const { title, amount, type, category } = req.body;

  const user = await User.findById(req.user._id);

  if (!title || !amount || !type || !category) {
    new ErrorResponse("Please Enter all the details", 401);
  }

  try {
    const newTransaction = {
      title,
      amount,
      type,
      category,
      createdOn: new Date(),
    };

    user.transactions.push(newTransaction);

    await user.save();
    res.status(201).json({
      success: true,
      transaction: newTransaction,
    });
  } catch (error) {
    next(error);
  }
};
