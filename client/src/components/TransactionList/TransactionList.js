import React from "react";
import Transaction from "../Transaction/Transaction";
import { GiMoneyStack, GiElectric } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";

import "./TransactionList.css";

const TransactionList = ({ transactions }) => {
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
          <GiElectric className="transactionIcon" size={40} color="#42c5f5" />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <MdLocalGroceryStore
            className="transactionIcon"
            size={40}
            color="#f5a742"
          />
        }
      />
      <hr className="hr-transactionList" />
      <Transaction
        Icon={
          <AiOutlineCar className="transactionIcon" size={40} color="#0c004f" />
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
