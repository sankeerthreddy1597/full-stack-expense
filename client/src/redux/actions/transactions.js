import axios from "axios";

import {
  GET_ALL_TRANSACTIONS,
  GET_TRANSACTIONS_FOR_DATE,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actionConstants/transactionConstants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
};

export const getAllTransactions = () => async (dispatch, getState) => {
  const transactions = await axios.get("/api/private/transactions", config);

  dispatch({
    type: GET_ALL_TRANSACTIONS,
    payload: transactions.data.transactions,
  });
};

export const getTransactionByDate = (date) => async (dispatch, getState) => {
  dispatch({
    type: GET_TRANSACTIONS_FOR_DATE,
    payload: {
      date: date,
    },
  });
};
