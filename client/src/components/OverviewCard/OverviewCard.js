import React from "react";
import "./OverviewCard.css";

const OverviewCard = ({ title, color, amount, change }) => {
  return (
    <div className="card-body">
      <p className="card__title">{title}</p>
      <div className="card__graph">
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
        <div className={title === "Expense" ? `line Expenseb` : `line`}></div>
      </div>
      <p className="card__amount">${amount}</p>
      <p
        className={
          title === "Expense" ? `card__change Expense` : `card__change`
        }
      >
        +${change}
      </p>
    </div>
  );
};

export default OverviewCard;
