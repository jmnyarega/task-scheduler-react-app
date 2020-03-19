import transactions from "../../src/reducers/getAllTransactions";

describe("Get Transaction Reducer", () => {
  const initialState = [ { id: 1, mpesa: 1 } ];
  const data = {
    action: {
      type: "GET_ALL_TRANSACTIONS",
      payload: [ { id: 2, mpesa: 1 } ],
    }
  }
  const newState = [
    { id: 1, mpesa: 1 },
    { id: 2, mpesa: 1 },
  ];
  it("#getAllTransactions", () => {
    const state = transactions(initialState, data.action);
    expect(state.length).toBe(newState.length);
  });

});
