import * as types from "../types";
import { API_URL } from "../constants";
import { http } from "../helpers/auth";

const addTransactionActionCreator = message => ({
  type: types.ADD_TRANSACTION,
  message,
});

const getAllTransactionsActionCreator = payload => ({
  type: types.GET_ALL_TRANSACTIONS,
  payload,
});

const addTransactionFaillure = () => ({
  type: types.FAIL_ADD_TRANSACTION,
  message: "Transaction Faillure"
})

export function addTransaction(data) {
  return dispatch => {
    http().post(`${API_URL}/transactions`, data).then(res => {
        dispatch(addTransactionActionCreator("Transaction Added"));
    }).catch(err => {
      console.log(err);
      dispatch(addTransactionFaillure(err.message))
    });
  }
}

export function getAllTransactions(page=1, limit=5, order="createdAt") {
  return dispatch => {
    http().get(`${API_URL}/transactions`).then(res => {
      dispatch(getAllTransactionsActionCreator(res.data.data));
    }).catch(err => console.log(err))
  }
}
