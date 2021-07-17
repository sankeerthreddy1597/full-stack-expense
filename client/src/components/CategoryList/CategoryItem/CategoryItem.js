import React from "react";
import "./CategoryItem.css";

import { useSelector } from "react-redux";

const CategoryItem = ({ title, amount, percent }) => {
  let totalAmount = 0;
  let currAmount = 0;
  let currPercent = 0;
  const transactionDetails = useSelector(
    (state) => state.transactionReducer.transactions
  );

  transactionDetails.map((transaction) => {
    if (transaction.category === title.replace(/\s+/g, "")) {
      currAmount += transaction.amount;
    }
    if (transaction.type !== "income") {
      totalAmount += transaction.amount;
    }
    return totalAmount;
  });

  currPercent = ((currAmount / totalAmount) * 100).toFixed(2);

  const categoryColorMap = {
    foodAndBeverages: "#F5DD4122",
    groceries: "#F6A64222",
    Utilities: "#43C5F522",
    automobile: "#0D004E22",
    other: "#eeeeee",
  };

  const barColorMap = {
    foodAndBeverages: "9px solid #F5DD41",
    groceries: "9px solid #F6A642",
    Utilities: "9px solid #43C5F5",
    automobile: " 9px solid #0D004E",
    other: "9px solid #777777",
  };

  const percentColorMap = {
    foodAndBeverages: "#F5DD41",
    groceries: "#F6A642",
    Utilities: "#43C5F5",
    automobile: " #0D004E",
    other: "#777777",
  };
  return (
    <div
      className="category-body"
      style={{
        backgroundColor: `${categoryColorMap[title.replace(/\s+/g, "")]}`,
      }}
    >
      <div className="catLeft">
        <div
          className="progressSpinner"
          style={{ border: `${barColorMap[title.replace(/\s+/g, "")]}` }}
        ></div>
        <div className="expenseSection">
          <p className="cat__title">{title}</p>
          <p className="cat__amount">${currAmount}</p>
        </div>
      </div>
      <div className="catRight">
        <p
          className="cat__percent"
          style={{ color: `${percentColorMap[title.replace(/\s+/g, "")]}` }}
        >
          {currPercent}%
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
