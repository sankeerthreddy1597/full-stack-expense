import axios from "axios";

import {
  GET_ALL_TRANSACTIONS,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTIION,
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

export const addTransaction = (transaction) => async (dispatch, getState) => {
  const { data } = await axios.post(
    "/api/private/addtransaction",
    transaction,
    config
  );
  dispatch({
    type: ADD_TRANSACTIION,
    payload: data.transaction,
  });
};
