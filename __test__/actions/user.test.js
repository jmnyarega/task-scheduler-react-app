import {
  loginActionCreator,
  signUpActionCreator,
  resetPasswordActionCreator,
  failureLoginActionCreator,
  failureSignupActionCreator,
  userDetailsActionCreator,
  logoutActionCreator,
  login,
  signUp,
  userData,
  logout,
  resetPassword,
} from "../../src/actions/user";

import { makeMockStore, mock as moxios } from "./utils";

describe("User Action Creators", () => {

  it("#logoutActionCreator: should return payload with ACTION & message", () => {
    const payload = loginActionCreator({name: "john"}, "LOGIN", "login successful");
    expect(payload.message).toBe("login successful");
    expect(payload.type).toBe("LOGIN");
    expect(payload.payload.name).toBe("john");
  });

  it("#signUpActionCreator: should return payload with ACTION & payload", () => {
    const payload = signUpActionCreator({name: "john"}, "SIGNUP", "sign up successful");
    expect(payload.payload.name).toBe("john");
    expect(payload.message).toBe("sign up successful");
    expect(payload.type).toBe("SIGNUP");
  });


  it("#resetPasswordActionCreator: should return payload with ACTION & payload", () => {
    const payload = resetPasswordActionCreator({ name: "john"}, "RESET_PASSWORD", "sign up successful");
    expect(payload.payload.name).toBe("john");
    expect(payload.message).toBe("sign up successful");
    expect(payload.type).toBe("RESET_PASSWORD");
  });

  it("#failureLoginActionCreator: should return payload with ACTION & payload", () => {
    const payload = failureLoginActionCreator("login failed", "FAIL_LOGIN");
    expect(payload.type).toBe("FAIL_LOGIN");
    expect(payload.message).toBe("login failed");
  });

  it("#faillurePasswordResetActionCreator: should return payload with ACTION & payload", () => {
    const payload = failureLoginActionCreator("password reset failed", "FAIL_RESET");
    expect(payload.type).toBe("FAIL_RESET");
    expect(payload.message).toBe("password reset failed");
  });

  it("#failureSignupActionCreator: should return payload with ACTION & payload", () => {
    const payload = failureSignupActionCreator("signup failed", "FAIL_SIGNUP");
    expect(payload.type).toBe("FAIL_SIGNUP");
    expect(payload.message).toBe("signup failed");
  });

  it("#userDetailsActionCreator: should return payload with ACTION & payload", () => {
    const payload = userDetailsActionCreator({name: "john"}, "USER_DETAILS");
    expect(payload.type).toBe("USER_DETAILS");
    expect(payload.payload.name).toBe("john");
  });

  it("#logoutActionCreator: should return payload with ACTION & payload", () => {
    const payload = logoutActionCreator("LOGOUT");
    expect(payload.type).toBe("LOGOUT");
  });

});

describe("User Actions", () => {
  const user = { username: "name", password: "pass" };
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('#login', () => {
    const response = { status: 200, response: { data: 1, token: "token", user } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });
    const expectedActions = [
      {
        payload: response.response.user,
        message: "login successful",
        type: "LOGIN",
      }
    ];
    const store = makeMockStore({user: []});
    return store.dispatch(login(user)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    });
  });

  it('#signup', () => {
    const response = { message: "sign up successful", status: 200, response: { token: "token", user } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });
    const expectedActions = [
      { message: response.message, type: "SIGNUP", payload: response.response }
    ];
    const store = makeMockStore({ user: [] });

    return store.dispatch(signUp(user)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    });
  });

  it('#userData', () => {
    const response = { status: 200, response: { user } };
    const expectedActions = [
      { message: response.message, type: "USER_DETAILS", payload: response.response }
    ];
    const store = makeMockStore({ user: [] });
    store.dispatch(userData(user));
    const actionsCalled = store.getActions();
    expect(actionsCalled).toEqual(expectedActions);
  });

  it('#logout', () => {
    const expectedActions = [ { type: "LOGOUT" } ];
    const store = makeMockStore({ user: [] });
    store.dispatch(logout());
    const actionsCalled = store.getActions();
    expect(actionsCalled).toEqual(expectedActions);
  });

  it('#resetPassword', () => {
    const response = { message: "reset successful", status: 200, response: { token: "token", user } };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });
    const expectedActions = [
      { message: response.message, type: "RESET_PASSWORD", payload: response.response }
    ];
    const store = makeMockStore({ user: [] });
    return store.dispatch(resetPassword(user)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    });
  });

});
