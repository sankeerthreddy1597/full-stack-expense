import React from "react";
import "./Transaction.css";
import Moment from "react-moment";
import moment from "moment";

const Transaction = ({ Icon }) => {
  const date = moment.now();
  return (
    <div className="transaction-container">
      <div className="transactionLeft">
        {Icon}
        <div className="description">
          <p className="transactionTitle">Weekly Bonus</p>
          <p className="transactionDate">
            <Moment format="DD MMM YY, hh:mm A">{date}</Moment>
          </p>
        </div>
      </div>
      <div className="transactionRight">
        <p className="transactionAmount">$155.21</p>
      </div>
    </div>
  );
};

export default Transaction;
