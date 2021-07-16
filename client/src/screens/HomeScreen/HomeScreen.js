import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import { BsFillCalendarFill, BsFillPlusCircleFill } from "react-icons/bs";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import BalanceSummary from "../../components/BalanceSummary/BalanceSummary";
import TransactionList from "../../components/TransactionList/TransactionList";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import CategoryList from "../../components/CategoryList/CategoryList";

import AddTransaction from "../../components/AddTransaction/AddTransaction";

import { useSelector, useDispatch } from "react-redux";

import { GET_ALL_TRANSACTIONS } from "../../redux/actionConstants/transactionConstants";
import { getAllTransactions } from "../../redux/actions/transactions";

import moment from "moment";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [date, setDate] = useState(moment.now());

  const dispatch = useDispatch();
  const useTransactions = useSelector((state) => state.transactionReducer);

  //UseEffect to call the API
  useEffect(() => {
    //Axios get API
    dispatch(getAllTransactions());
  }, [date]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

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
                onClick={handleClickOpen}
              />
              <AddTransaction
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
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
            <CustomDatePicker dateChange={handleDateChange} />
          </div>
          <div className="innerRow">
            <BalanceSummary />
          </div>
          <hr className="hr-separation" />
          <div className="innerRow">
            <TransactionList transactions={useTransactions} date={date} />
          </div>
        </div>
        <div className="col-5">
          <div className="innerRowSmall">
            <p className="weeklyBudgetBanner">Set Up Weekly Budget</p>
          </div>
          <div className="innerRowSmall">
            <p className="weeklyOverview">Weekly Overview</p>
          </div>
          <div className="innerRowSmall">
            <div className="cardwrapper">
              <OverviewCard title="Expense" amount="121.23" change="43.23" />
              <OverviewCard title="Income" amount="151.23" change="53.23" />
            </div>
          </div>
          <div className="innerRowSmall">
            <p className="categoryOverview">Expenses by Category</p>
          </div>
          <div className="innerRowSmall">
            <CategoryList />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
