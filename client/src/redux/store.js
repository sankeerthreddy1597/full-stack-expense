import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const transactionsFromStorage = localStorage.getItem("transactionItems")
  ? []
  : [];

const initialState = {
  transactionReducer: {
    transactions: transactionsFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
