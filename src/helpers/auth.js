import axios from "axios";

export const addTokenToLocalStorage = token => {
  const { localStorage } = window;
  console.log(token);
  localStorage.setItem("jwt", token);
}

export const removeLocalStorageToken = () => {
  const { localStorage } = window;
  localStorage.removeItem("jwt");
}

export const http = () => {
  const { localStorage } = window;
  const token = localStorage.getItem("jwt");
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
}
