import React from "react";
import Transaction from "../Transaction/Transaction";
import { GiMoneyStack } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import "./TransactionList.css";

const TransactionList = () => {
  return (
    <div className="transactionList">
      <Transaction
        Icon={
          <GiMoneyStack className="transactionIcon" size={40} color="#168212" />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <IoFastFoodOutline
            className="transactionIcon"
            size={40}
            color="#f5dd42"
          />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <GiMoneyStack className="transactionIcon" size={40} color="#168212" />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <IoFastFoodOutline
            className="transactionIcon"
            size={40}
            color="#f5dd42"
          />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <GiMoneyStack className="transactionIcon" size={40} color="#168212" />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <IoFastFoodOutline
            className="transactionIcon"
            size={40}
            color="#f5dd42"
          />
        }
      />
      <hr className="hr-transactionList" />
    </div>
  );
};

export default TransactionList;
