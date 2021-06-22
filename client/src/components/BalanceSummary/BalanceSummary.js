import React from "react";
import "./BalanceSummary.css";

const BalanceSummary = () => {
  //Temp values
  const expense = 120.5;
  const income = 456.8;
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
