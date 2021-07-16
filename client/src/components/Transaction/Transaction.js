import React from "react";
import "./Transaction.css";
import Moment from "react-moment";
import moment from "moment";

const Transaction = ({ Icon, transactionDetails }) => {
  return (
    <div className="transaction-container">
      <div className="transactionLeft">
        {Icon}
        <div className="description">
          <p className="transactionTitle">{transactionDetails.title}</p>
          <p className="transactionDate">
            <Moment format="DD MMM YY, hh:mm A">
              {transactionDetails.createdOn}
            </Moment>
          </p>
        </div>
      </div>
      <div className="transactionRight">
        <p className="transactionAmount">${transactionDetails.amount}</p>
      </div>
    </div>
  );
};

export default Transaction;
