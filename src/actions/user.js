import axios from "axios";

import * as types from "../types";
import { API_URL } from "../constants";

import {
  addTokenToLocalStorage,
  decodeUser,
  removeLocalStorageToken,
} from "../helpers/auth";

const user = decodeUser();

export const loginActionCreator = (payload, type=types.LOGIN, message="login successful") =>
  ({ type, payload, message });

export const signUpActionCreator = (payload, type=types.SIGNUP, message="sign up successful") =>
  ({ type, payload, message });

export const resetPasswordActionCreator = (payload, type=types.RESET_PASSWORD, message="reset successful") =>
  ({ type, payload, message });

export const failureLoginActionCreator = (message, type=types.FAIL_LOGIN) =>
  ({ type, message });

export const failurePasswordResetActionCreator = (message, type=types.FAIL_RESET) =>
  ({ message, type });

export const failureSignupActionCreator = (message, type=types.FAIL_SIGNUP) =>
  ({ type, message });

export const userDetailsActionCreator = (payload, type=types.USER_DETAILS) =>
  ({ type, payload });

export const logoutActionCreator = (type=types.LOGOUT) => ({ type });

export function login(data) {
  return dispatch => {
    return axios.post(`${API_URL}/login`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      dispatch(loginActionCreator(res.data.user));
    }).catch(err => dispatch(failureLoginActionCreator(err.message)))
  }
}

export function signUp(data) {
  return dispatch => {
    return axios.post(`${API_URL}/signUp`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      dispatch(signUpActionCreator(res.data));
    }).catch(err => failureSignupActionCreator(err.message))
  }
}

export function userData(user=user) {
  return dispatch => {
    dispatch(userDetailsActionCreator({ user }));
  }
}

export function logout() {
  return dispatch => {
    removeLocalStorageToken();
    dispatch(logoutActionCreator());
  }
}

export function resetPassword(data) {
  return dispatch => {
    return axios.post(`${API_URL}/reset`, data).then(res => {
      dispatch(resetPasswordActionCreator(res.data));
      addTokenToLocalStorage(res.data.token)
    }).catch(err => dispatch(failurePasswordResetActionCreator(err.message)));
  }
}
