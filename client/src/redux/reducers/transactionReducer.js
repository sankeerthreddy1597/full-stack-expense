import {
  GET_ALL_TRANSACTIONS,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actionConstants/transactionConstants";
import Moment from "react-moment";

export const transactionReducer = (state = { transactions: [] }, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};
