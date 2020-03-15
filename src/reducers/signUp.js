import * as types from "../types";

const signUp = (state=[], action) => {
  switch(action.type) {
    case types.SIGNUP:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default signUp;
