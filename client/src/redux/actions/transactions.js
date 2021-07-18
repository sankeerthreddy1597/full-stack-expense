import axios from "axios";

import {
  GET_ALL_TRANSACTIONS,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTIION,
} from "../actionConstants/transactionConstants";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//   },
// };

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

export const updateTransaction =
  (newTransaction, allTransactions) => async (dispatch, getState) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    allTransactions.forEach((transaction) => {
      if (transaction._id === newTransaction.id) {
        transaction.title = newTransaction.title;
        transaction.amount = newTransaction.amount;
        transaction.updatedOn = newTransaction.updatedOn;
      }
    });
    const { data } = await axios.put(
      `/api/private/updatetransaction/${newTransaction.id}`,
      allTransactions,
      config
    );
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: data.updatedTransactions,
    });
  };

export const deleteTransaction =
  (id, transaction) => async (dispatch, getState) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    const { data } = await axios.put(
      `/api/private/deletetransaction/${id}`,
      transaction.filter((t) => t._id !== id),
      config
    );
    dispatch({
      type: DELETE_TRANSACTION,
      payload: data.id,
    });
  };
