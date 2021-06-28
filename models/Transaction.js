const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter name of transaction"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter amount"],
  },
  type: {
    type: String,
    required: [true, "Income or Expenditure?"],
  },
  category: {
    type: String,
    required: [true, "Please choose category"],
  },
  createdOn: Date,
  updatedOn: Date,
});

module.exports = TransactionSchema;
