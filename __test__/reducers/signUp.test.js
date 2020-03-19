import signUp from "../../src/reducers/signUp";

describe("#signUp", () => {
  const data = {
    action: {
      type: "SIGNUP",
      payload: { username: "john", password: "john" },
    }
  }

  it("should update state correctly on action success", () => {
    const state = signUp([], data.action);
    expect(state.username).toBe("john");
    expect(state.password).toBe("john");
  });

});
