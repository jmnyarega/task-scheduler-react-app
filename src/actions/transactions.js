import * as types from "../types";

export const addTransaction = payload => ({
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

export const getAllTransactions = () => ({
  type: types.GET_ALL_TRANSACTIONS,
});
