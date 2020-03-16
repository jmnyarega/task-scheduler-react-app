import * as types from "../types";

const transactions = (state=[], action) => {
  console.log(action)
  switch(action.type) {
    case types.GET_ALL_TRANSACTIONS:
      return state.concat(action.payload);
    default:
      return state;
  }
}

export default transactions;
