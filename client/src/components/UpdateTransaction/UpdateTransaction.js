import Dialog from "@material-ui/core/Dialog";
import React, { useState, useEffect } from "react";
import "./UpdateTransaction.css";

import { updateTransaction } from "../../redux/actions/transactions";
import { useDispatch, useSelector } from "react-redux";

const UpdateTransaction = ({ onClose, selectedValue, open, transaction }) => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(
    (state) => state.transactionReducer.transactions
  );
  const [transactionTitle, setTransactionTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(transaction.amount);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTransactionTitle(transaction.title);
    setAmount(transaction.amount);
  }, [error, transaction.title, transaction.amount]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleTransactionTitleChange = (e) => {
    setTransactionTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleUpdateTransaction = () => {
    if (transactionTitle === "" || amount === "" || parseFloat(amount) <= 0) {
      setError(true);
    } else {
      const newTransaction = {
        id: transaction._id,
        title: transactionTitle,
        amount: parseFloat(amount),
        updatedOn: new Date(),
      };
      dispatch(updateTransaction(newTransaction, allTransactions));
      setTransactionTitle("");
      setAmount("");
      onClose(selectedValue);
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div className="dialog-container">
        <h2 className="dialog__title">Update Transaction</h2>
        <hr />
        <div className="dialog__form">
          <div className="dialog__select">
            <label htmlFor="transactionType">Transaction Type:</label>
            <select
              name="transactionType"
              id="transactionType"
              value={transaction.type.toLowerCase()}
              disabled
            >
              <option value="income">Income</option>
              <option value="expenditure">Expenditure</option>
            </select>
          </div>
          {transaction.type.toLowerCase() === "expenditure" && (
            <div className="dialog__select">
              <label htmlFor="category">Category: </label>
              <select
                name="category"
                id="category"
                value={transaction.category}
                disabled
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
          <button className="dialog__btn" onClick={handleUpdateTransaction}>
            Submit
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateTransaction;
