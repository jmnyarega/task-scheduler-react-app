import * as types from "../types";

const addTransaction = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default addTransaction;
