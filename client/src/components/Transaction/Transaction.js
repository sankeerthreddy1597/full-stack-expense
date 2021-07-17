import React from "react";
import "./Transaction.css";
import Moment from "react-moment";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Transaction = ({ Icon, transactionDetails }) => {
  const deleteTransactionHandler = () => {
    console.log(transactionDetails._id);
  };

  const updateTransactionHandler = () => {
    console.log(transactionDetails._id);
  };
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
        <AiFillDelete
          className="transaction__actionIcon"
          size={30}
          color="#e34439"
          onClick={deleteTransactionHandler}
        />
        <AiFillEdit
          className="transaction__actionIcon"
          size={30}
          color="#4380fa"
          onClick={updateTransactionHandler}
        />
      </div>
    </div>
  );
};

export default Transaction;
