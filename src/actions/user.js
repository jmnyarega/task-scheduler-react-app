import axios from "axios";

import * as types from "../types";
import { API_URL } from "../constants";

import {
  addTokenToLocalStorage,
  decodeUser,
  removeLocalStorageToken,
} from "../helpers/auth";

const loginActionCreator = payload => ({
  type: types.LOGIN,
  payload,
  message: "login successful",
});

const signUpActionCreator = payload => ({
  type: types.SIGNUP,
  payload,
  message: "sign up successful",
});

const resetPasswordActiobCreator = payload => ({
  type: types.RESET_PASSWORD,
  payload,
  message: "reset successful",
});

const faillureLoginActionCreator = message => ({
  type: types.FAIL_LOGIN,
  message,
});

const faillurePasswordResetActionCreator = message => ({
  type: types.FAIL_RESET,
  message,
});

const faillureSignupActionCreator = message => ({
  type: types.FAIL_SIGNUP,
  message,
});

const userDetailsActionCreator = payload => ({
  type: types.USER_DETAILS,
  payload,
});

const logoutActionCreator = () => ({
  type: types.LOGOUT,
})

export function login(data) {
  return dispatch => {
    axios.post(`${API_URL}/login`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      dispatch(loginActionCreator(res.data.user));
    }).catch(err => dispatch(faillureLoginActionCreator(err.message)))
  }
}

export function signUp(data) {
  return dispatch => {
    axios.post(`${API_URL}/signUp`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      dispatch(signUpActionCreator(res.data));
    }).catch(err => faillureSignupActionCreator(err.message))
  }
}

export function userData() {
  return dispatch => {
    const user = decodeUser();
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
    axios.post(`${API_URL}/reset`, data).then(res => {
      dispatch(resetPasswordActiobCreator(res.data));
      addTokenToLocalStorage(res.data.token)
    }).catch(err => dispatch(faillurePasswordResetActionCreator(err.message)));
  }
}
