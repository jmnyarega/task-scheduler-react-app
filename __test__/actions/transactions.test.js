import {
  addTransactionActionCreator,
  getAllTransactionsActionCreator,
  addTransactionFailure,
  getAllTransactions,
  addTransaction,
} from "../../src/actions/transactions";

import { makeMockStore, mock as moxios } from "./utils";

describe("Transaction Action Creators", () => {

  it("#addTransactionActionCreator: should return payload with ACTION & message", () => {
    const payload = addTransactionActionCreator("successfully added", "ADD_TRANSACTION");
    expect(payload.message).toBe("successfully added");
    expect(payload.type).toBe("ADD_TRANSACTION");
  });

  it("#getAllTransactionsActionCreator: should return payload with ACTION & payload", () => {
      const payload = getAllTransactionsActionCreator({test: 1}, "GET_ALL_TRANSACTIONS");
    expect(payload.payload.test).toBe(1);
    expect(payload.type).toBe("GET_ALL_TRANSACTIONS");
  });

  it("#addTransactionFailure: should return payload with ACTION & payload", () => {
    const payload = addTransactionFailure("Transaction Failure", "FAIL_ADD_TRANSACTION");
    expect(payload.message).toBe("Transaction Failure");
    expect(payload.type).toBe("FAIL_ADD_TRANSACTION");
  });

});

describe("Transaction Actions", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('#getAllTransactions: should return all transactions', () => {
    const response = { status: 200, response: { data: 1} };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });
    const expectedActions = [
      { payload: response.response.data,  type: "GET_ALL_TRANSACTIONS" }
    ];
    const store = makeMockStore({todo: []});
    return store.dispatch(getAllTransactions()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    })
  })

  it('#addTransaction: should return all transactions', () => {
    const response = { status: 201, message: "Transaction Added" };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });
    const expectedActions = [
      { message: response.message, type: "ADD_TRANSACTION" }
    ];
    const store = makeMockStore({ transactions: [] });

    return store.dispatch(addTransaction()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expectedActions);
    })
  })

});
