import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Login from "./Login";
import Registration from "./Registration";
import Transaction from "./Transaction";
import ResetPassword from "./ResetPassword";

import rootReducer from "./reducers"


const store = createStore(rootReducer, composeWithDevTools());
const Index = () => {
  return (
   <Provider store={store}>
      <Registration />
    </Provider>
  )
}

ReactDom.render(<Index/>, document.getElementById("root"));
