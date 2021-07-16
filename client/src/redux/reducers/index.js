import { combineReducers } from "redux";

import { transactionReducer } from "./transactionReducer";

export const rootReducer = combineReducers({
  transactionReducer: transactionReducer,
});
