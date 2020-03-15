import axios from "axios";

import * as types from "../types";
import { API_URL } from "../constants";

import { addTokenToLocalStorage, removeLocalStorageToken } from "../helpers/auth";

export const loginActionCreator = payload => ({
  type: types.LOGIN,
  payload,
});

export const signUpActionCreator = payload => ({
  type: types.SIGNUP,
  payload,
});

export const resetPasswordActiobCreator = payload => ({
  type: types.RESET_PASSWORD,
  payload,
});

export function login(data) {
  return dispatch => {
    dispatch(loginActionCreator(data));
    axios.post(`${API_URL}/login`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
    }).catch(err => console.log(err))
  }
}

export function signUp(data) {
  return dispatch => {
    dispatch(signUpActionCreator(data));
    axios.post(`${API_URL}/signUp`, data).then(x => {
      console.log(x)
    }).catch(err => console.log(err))
  }
}

export function resetPassword(data) {
  console.log(data);
  return dispatch => {
    dispatch(resetPasswordActiobCreator(data));
    axios.post(`${API_URL}/reset`, data).then(x => {
      console.log(x)
    }).catch(err => console.log(err))
  }
}
