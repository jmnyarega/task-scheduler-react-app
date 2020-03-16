import * as types from "../types";

const login = (state=[], action) => {
  switch(action.type) {
    case types.LOGIN: 
      return {
        ...state,
        ...action.payload,
          messages: (state.message || {})[login] = action.message,
      }
     case types.FAIL_LOGIN:
      return {
        ...state,
          messages: (state.message || {})[login] = action.message,
      }
    default:
      return state;
  }
}

export default login;
