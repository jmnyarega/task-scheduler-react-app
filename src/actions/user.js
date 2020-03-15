import * as types from "../types";

export const login = payload => ({
  type: types.LOGIN,
  payload,
});

export const signUp = payload => ({
  type: types.SIGNUP,
  payload,
});

export const resetPassword = payload => ({
  type: types.RESET_PASSWORD,
  payload,
});
