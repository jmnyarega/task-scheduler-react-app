import * as types from "../types";
import { API_URL } from "../constants";
import { http } from "../helpers/auth";

const addTransactionActionCreator = payload => ({
  type: types.ADD_TRANSACTION,
  payload,
});

export const deleteTransaction = id => ({
  type: types.DELETE_TRANSACTION,
  id
});

export const updateTransaction = id => ({
  type: types.UPDATE_TRANSACTION,
  id
});

export const getAllTransactionsActionCreator = payload => ({
  type: types.GET_ALL_TRANSACTIONS,
  payload,
});


export function addTransaction(data) {
  return dispatch => {
    http().post(`${API_URL}/transactions`, data).then(res => {
        dispatch(addTransactionActionCreator(data));
    }).catch(err => console.log(err))
  }
}

export function getAllTransactions(page=1, limit=5, order="createdAt") {
  return dispatch => {
    http().get(`${API_URL}/transactions`).then(res => {
      dispatch(getAllTransactionsActionCreator(res.data.data));
    }).catch(err => console.log(err))
  }
}
