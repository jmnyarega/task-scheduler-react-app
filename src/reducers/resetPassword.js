import * as types from "../types";

const resetPassword = (state=[], action) => {
  switch(action.type) {
    case types.RESET_PASSWORD:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default resetPassword;
