import * as types from "../types";
import { API_URL } from "../constants";
import { http } from "../helpers/auth";

export const addTransactionActionCreator = (message, type=types.ADD_TRANSACTION) => ({
  type,
  message,
});

export const getAllTransactionsActionCreator = (payload, type=types.GET_ALL_TRANSACTIONS) => ({
  type,
  payload,
});

export const addTransactionFailure = (message="Transaction Failure", type=types.FAIL_ADD_TRANSACTION) => ({
  type,
  message,
})

export function addTransaction(data) {
  return dispatch => {
    return http().post(`${API_URL}/transactions`, data).then(res => {
        dispatch(addTransactionActionCreator("Transaction Added"));
    }).catch(err => {
      dispatch(addTransactionFailure(err.message))
    });
  }
}

export function getAllTransactions(page=1, limit=5, order="createdAt") {
  return dispatch => {
    return http().get(`${API_URL}/transactions`).then(res => {
      const data = res.data && res.data.data
      dispatch(getAllTransactionsActionCreator(data));
    }).catch(err => console.log(err))
  }
}
