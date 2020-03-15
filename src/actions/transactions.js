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

export const getAllTransactionsActionCreator = () => ({
  type: types.GET_ALL_TRANSACTIONS,
});


export function addTransaction(data) {
  return dispatch => {
    dispatch(addTransactionActionCreator(data));
    http().post(`${API_URL}/transactions`, { ...data, ...{ user_id: 1} }).then(res => {
      console.log(res.data.token)
    }).catch(err => console.log(err))
  }
}

export function getAllTransactions() {
  return dispatch => {
    dispatch(getAllTransactionsActionCreator());
    http().get(`${API_URL}/transactions`).then(res => {
      console.log(res.data.token)
    }).catch(err => console.log(err))
  }
}
