import {
  GET_ALL_TRANSACTIONS,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_TRANSACTIION,
} from "../actionConstants/transactionConstants";

export const transactionReducer = (state = { transactions: [] }, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case ADD_TRANSACTIION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case UPDATE_TRANSACTION:
      return state;
    case DELETE_TRANSACTION:
      return state;
    default:
      return state;
  }
};
