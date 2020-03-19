import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

const mockStore = configureMockStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({ ...state })
};

export const mock = moxios;
