import React, { useState } from "react";
import "./Transaction.css";
import Moment from "react-moment";
import UpdateTransaction from "../UpdateTransaction/UpdateTransaction";

import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../redux/actions/transactions";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Transaction = ({ Icon, transactionDetails }) => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(
    (state) => state.transactionReducer.transactions
  );

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const deleteTransactionHandler = () => {
    dispatch(deleteTransaction(transactionDetails._id, allTransactions));
  };

  const updateTransactionHandler = () => {
    setOpen(true);
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
        <UpdateTransaction
          selectedValue={selectedValue}
          open={open}
          transaction={transactionDetails}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Transaction;
