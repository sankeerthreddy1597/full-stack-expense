import React from "react";
import Transaction from "../Transaction/Transaction";
import { GiMoneyStack, GiElectric } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { AiOutlineCar, AiFillFileUnknown } from "react-icons/ai";
import { useSelector } from "react-redux";

import "./TransactionList.css";

const TransactionList = () => {
  const transactions = useSelector(
    (state) => state.transactionReducer.transactions
  );

  const transactionCategory = {
    income: (
      <GiMoneyStack className="transactionIcon" size={40} color="#168212" />
    ),
    foodAndBeverages: (
      <IoFastFoodOutline
        className="transactionIcon"
        size={40}
        color="#f5dd42"
      />
    ),
    groceries: (
      <MdLocalGroceryStore
        className="transactionIcon"
        size={40}
        color="#f5a742"
      />
    ),
    utilities: (
      <GiElectric className="transactionIcon" size={40} color="#42c5f5" />
    ),
    //TODO - remove duplicate after adjusting and adding delete API
    Utilities: (
      <GiElectric className="transactionIcon" size={40} color="#42c5f5" />
    ),
    automobile: (
      <AiOutlineCar className="transactionIcon" size={40} color="#0c004f" />
    ),
    other: (
      <AiFillFileUnknown
        className="transactionIcon"
        size={40}
        color="#eeeeee"
      />
    ),
  };
  return (
    <div className="transactionList">
      {transactions.map((transaction, index) => {
        return (
          <div key={index}>
            <Transaction
              key={transaction._id}
              Icon={transactionCategory[transaction.category]}
              transactionDetails={transaction}
            />
            <hr key={index} className="hr-transactionList" />
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
