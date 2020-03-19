import login from "../../src/reducers/login";

describe("#login", () => {
  const data = {
    action: {
      type: "LOGIN",
      payload: { name: "john" },
      message: "login successful",
    }
  }

  it("should update correct state on login successful", () => {
    const state = login([], data.action);
    expect(state.message).toBe("login successful");
    expect(state.name).toBe("john");
  });

  it("should update correct state on login failure", () => {
    data.action.type = "FAIL_LOGIN";
    data.action.message = "login failed"
    const state = login([], data.action);
    expect(state.message).toBe("login failed");
  });

  it("should get correct user details", () => {
    data.action.type = "USER_DETAILS";
    data.action.payload = { name: "john" };
    const state = login([], data.action);
    expect(state.name).toBe("john");
  });

  it("should update state when user logs out", () => {
    data.action.type = "LOGOUT";
    data.action.payload = { user: { name: "john" } };
    const state = login([], data.action);
    expect(state.user.name).toBe(undefined);
  });

});
