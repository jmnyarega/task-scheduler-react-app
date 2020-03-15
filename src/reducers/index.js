import { combineReducers } from "redux";
import addTransaction from "./addTransaction";
import login from "./login";
import resetPassword from "./resetPassword";
import signUp from "./signUp";

export default combineReducers({
  addTransaction,
  login,
  resetPassword,
  signUp,
});
