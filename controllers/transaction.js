const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.getTransactions = async (req, res, next) => {
  try {
    const user = await req.user;
    res.status(200).json({
      success: true,
      transactions: await user.transactions,
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

exports.deleteTransaction = async (res, req, next) => {
  const transactionId = req.req.params.id;
  const user = await User.findById(req.req.user._id);
  try {
    if (user) {
      user.transactions = req.req.body;
      const updatedTransactions = await user.save();
      // console.log(updatedTransactions.transactions);
      res.res.status(202).json({
        success: true,
        updated: updatedTransactions.transactions,
        id: transactionId,
      });
    } else {
      new ErrorResponse("No user found - No access to this route ", 401);
    }
  } catch (error) {
    next(error);
  }
};
