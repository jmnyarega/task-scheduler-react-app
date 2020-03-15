import * as types from "../types";

const login = (state=[], action) => {
  switch(action.type) {
    case types.LOGIN: 
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default login;
