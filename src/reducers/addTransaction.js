import * as types from "../types";

const addTransaction = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return state = [
        ...state,
        state.transactions.concat(action.payload),
      ]
    default:
      return state
  }
}

export default addTransaction;