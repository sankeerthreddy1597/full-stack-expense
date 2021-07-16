import React from "react";
import "./BalanceSummary.css";
import { useSelector } from "react-redux";

const BalanceSummary = () => {
  //Temp values
  const transactions = useSelector((state) => state.transactionReducer);

  let expense = 0;
  let income = 0;

  transactions.transactions.map((transaction) =>
    transaction.type === "income"
      ? (income += transaction.amount)
      : (expense += transaction.amount)
  );
  // const expense = transactions.transactions.reducer(
  //   (a, b) => (b.type === "income" ? a + b : a),
  //   0
  // );
  // const income = 456.8;
  const balance = income - expense;
  return (
    <>
      <div className="left">
        <div className="balanceSection">
          <p className="balance-title">Expenses</p>
          <p className="amount expense">${expense}</p>
        </div>
        <div className="balanceSection">
          <p className="balance-title">Income</p>
          <p className="amount income">${income}</p>
        </div>
      </div>
      <div className="right">
        <div className="balanceSection">
          <p className="balance-title">Balance</p>
          <p className="amount total">
            {balance >= 0 ? `$${balance}` : `-$${Math.abs(balance)}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default BalanceSummary;
