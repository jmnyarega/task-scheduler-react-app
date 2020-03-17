import * as types from "../types";

const resetPassword = (state=[], action) => {
  switch(action.type) {
    case types.RESET_PASSWORD:
      return {
        ...state,
        ...action.payload,
        message: action.message,
      }

    case types.FAIL_RESET:
      return {
        ...state,
        message: action.message,
      }
    default:
      return state
  }
}

export default resetPassword;
