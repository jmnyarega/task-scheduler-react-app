import addTransaction from "../../../src/reducers/addTransaction";

describe("Add Transaction Reducer", () => {
  const data = {
    action: {
      type: "ADD_TRANSACTION",
      message: "Transaction Added"
    }
  }
  it("#addTransaction", () => {
    const state = addTransaction([{ id: 1, mpesa: "MPESA" }], data.action);
    expect(state.message).toBe("Transaction Added");
  });
});
