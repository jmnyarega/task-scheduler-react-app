import * as types from "../types";

const login = (state=[], action) => {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        ...action.payload,
          message: action.message,
      }
     case types.FAIL_LOGIN:
      return {
        ...state,
          message: action.message,
      }
     case types.USER_DETAILS:
      return {
        ...state,
        ...action.payload,
      }
    case types.LOGOUT:
        return {
          ...state,
          user: {}
        }
    default:
      return state;
  }
}

export default login;
