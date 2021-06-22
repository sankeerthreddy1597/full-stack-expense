import React from "react";
import "./HomeScreen.css";
import { BsFillCalendarFill, BsFillPlusCircleFill } from "react-icons/bs";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import BalanceSummary from "../../components/BalanceSummary/BalanceSummary";
import TransactionList from "../../components/TransactionList/TransactionList";

const HomeScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <div className="innerRow">
            <h1 className="title">Transactions</h1>
            <div className="titleEnd">
              <BsFillCalendarFill
                size={14}
                color="#bcbcbc"
                className="calendarIcon"
              />
              <BsFillPlusCircleFill
                size={28}
                color="#4338f8"
                className="addTransaction"
              />
            </div>
          </div>
          <div className="innerRow">
            <input
              type="text"
              placeholder="Search..."
              className="transactionSearch"
            />
          </div>
          <div className="innerRow">
            <CustomDatePicker />
          </div>
          <div className="innerRow">
            <BalanceSummary />
          </div>
          <hr className="hr-separation" />
          <div className="innerRow">
            <TransactionList />
          </div>
        </div>
        <div className="col-5">Right side</div>
      </div>
    </>
  );
};

export default HomeScreen;
