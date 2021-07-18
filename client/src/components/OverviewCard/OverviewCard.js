import React from "react";
import "./OverviewCard.css";
import { useSelector } from "react-redux";
import moment from "moment";

const OverviewCard = ({ title, color, amount, change }) => {
  let currWeekAmount = 0;
  let lastWeekAmount = 0;
  const transactionDetails = useSelector(
    (state) => state.transactionReducer.transactions
  );
  transactionDetails.forEach((transaction) => {
    if (moment(transaction.createdOn) > moment(moment.now()).add(-7, "days")) {
      if (transaction.type.toLowerCase() === title.toLowerCase()) {
        currWeekAmount += transaction.amount;
      }
    } else if (
      moment(transaction.createdOn) > moment(moment.now()).add(-14, "days")
    ) {
      if (transaction.type.toLowerCase() === title.toLowerCase()) {
        lastWeekAmount += transaction.amount;
      }
    }
  });
  let weekChange = currWeekAmount - lastWeekAmount;
  return (
    <div className="card-body">
      <p className="card__title">{title}</p>
      <div className="card__graph">
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
        <div
          className={title === "Expenditure" ? `line Expenseb` : `line`}
        ></div>
      </div>
      <p className="card__amount">${currWeekAmount}</p>
      <p
        className={
          title === "Expenditure" ? `card__change Expense` : `card__change`
        }
      >
        {weekChange < 0 ? `-$${Math.abs(weekChange)}` : `+$${weekChange}`}
      </p>
    </div>
  );
};

export default OverviewCard;
