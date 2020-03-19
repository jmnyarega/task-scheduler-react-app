import resetPassword from "../../src/reducers/resetPassword";

describe("#resetPassword", () => {
  const data = {
    action: {
      type: "RESET_PASSWORD",
      payload: { username: "john", password: "john" },
      message: "password reset successful",
    }
  }

  it("should update state correctly when on success", () => {
    const state = resetPassword([], data.action);
    expect(state.message).toBe("password reset successful");
    expect(state.username).toBe("john");
    expect(state.password).toBe("john");
  });

  it("should update state correctly on action failure", () => {
    data.action.type = "FAIL_RESET";
    data.action.message = "password reset failed";
    const state = resetPassword([], data.action);
    expect(state.message).toBe("password reset failed");
  });

});
