import * as types from "../types";

const addTransaction = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return state = {
        ...state,
        message: action.message
      }
    case types.FAIL_ADD_TRANSACTION:
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}

export default addTransaction;
