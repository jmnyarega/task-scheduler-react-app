import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Transaction from "./components/Transaction/View";
import AddTransaction from "./components/Transaction/Add";
import TransactionDetails from "./components/Transaction/View/TransactionDetails";
import ResetPassword from "./components/ResetPassword";

const Root = () => {
  return (
    <div>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={AddTransaction} path="/add" />
        <Route component={Transaction} exact path="/transactions" />
        <Route component={TransactionDetails} path="/details" />
        <Route component={ResetPassword} path="/reset" />
        <Route component={Registration} path="/register" />
      </Switch>
    </div>
  );
};

export default Root;
