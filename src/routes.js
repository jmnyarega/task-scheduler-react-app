import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Transaction from "./components/Transaction"
import ResetPassword from "./components/ResetPassword";

const Root = () => {
  return (
    <div>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Transaction} path="/transaction" />
        <Route component={ResetPassword} path="/reset" />
        <Route component={Registration} path="/register" />
      </Switch>
    </div>
  );
};

export default Root;
