import Dialog from "@material-ui/core/Dialog";
import React, { useState, useEffect } from "react";
import "./AddTransaction.css";

import { addTransaction } from "../../redux/actions/transactions";
import { useDispatch } from "react-redux";

const AddTransaction = ({ onClose, selectedValue, open }) => {
  const dispatch = useDispatch();
  const [transactionType, setTransactionType] = useState("income");
  const [category, setCategory] = useState("foodAndBeverages");
  const [transactionTitle, setTransactionTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {}, [error]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleTransactionTitleChange = (e) => {
    setTransactionTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleAddTransaction = () => {
    if (transactionType === "" || amount === "" || parseFloat(amount) <= 0) {
      setError(true);
    } else {
      const newTransaction = {
        title: transactionTitle,
        amount: parseFloat(amount),
        type: transactionType,
        category: transactionType === "income" ? "income" : category,
      };
      dispatch(addTransaction(newTransaction));
      onClose(selectedValue);
      setTransactionType("income");
      setTransactionTitle("");
      setAmount("");
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className="dialog-container">
        <h2 className="dialog__title">Add Transaction</h2>
        <hr />
        <div className="dialog__form">
          <div className="dialog__select">
            <label htmlFor="transactionType">Transaction Type:</label>
            <select
              name="transactionType"
              id="transactionType"
              onChange={handleTransactionTypeChange}
              value={transactionType}
            >
              <option value="income">Income</option>
              <option value="expenditure">Expenditure</option>
            </select>
          </div>
          {transactionType === "expenditure" && (
            <div className="dialog__select">
              <label htmlFor="category">Category: </label>
              <select
                name="category"
                id="category"
                onChange={handleCategoryChange}
                value={category}
              >
                <option value="foodAndBeverages">Food And Beverages</option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="automobile">Automobile</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}
          <div className="dialog__transactionName">
            <label htmlFor="transactionName">Transaction title: </label>
            <input
              type="text"
              className="transactionName"
              placeholder="Transaction"
              value={transactionTitle}
              onChange={handleTransactionTitleChange}
            />
          </div>
          <div className="dialog__transactionName">
            <label htmlFor="transactionName">Amount: </label>
            <input
              type="number"
              className="transactionName"
              placeholder="$XXXX"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <hr />
        <div className="dialog__submit">
          {error && <p>Please Enter valid details</p>}
          <button className="dialog__btn" onClick={handleAddTransaction}>
            Submit
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTransaction;
