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
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  const transactions = await axios.get("/api/private/transactions", config);
  //console.log(transactions.data.transactions);
  dispatch({
    type: GET_ALL_TRANSACTIONS,
    payload: transactions.data.transactions,
  });
};

export const addTransaction = (transaction) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
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

export const updateTransaction = (id) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  const { data } = await axios.put(
    `/api/private/updatetransaction/${id}`,
    config
  );
  dispatch({
    type: UPDATE_TRANSACTION,
    payload: data,
  });
};

export const deleteTransaction = (id) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  const { data } = await axios.delete(
    `/api/private/deletetransaction/${id}`,
    config
  );
  dispatch({
    type: DELETE_TRANSACTION,
    payload: data,
  });
};
