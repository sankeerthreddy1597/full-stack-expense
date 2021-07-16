import {
  GET_ALL_TRANSACTIONS,
  GET_TRANSACTIONS_FOR_DATE,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actionConstants/transactionConstants";

export const transactionReducer = (state = { transactions: [] }, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case GET_TRANSACTIONS_FOR_DATE:
      state.transactions.filter((transaction) =>
        console.log(transaction.createdOn, action.payload)
      );
      return {
        ...state,
        transactions: state.transactions.filter((transaction) =>
          console.log(transaction.createdOn, action.payload)
        ),
      };
    default:
      return state;
  }
};
