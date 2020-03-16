import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { userData } from "./actions/user"

import Login from "./components/Login";
import Registration from "./components/Registration";
import Transaction from "./components/Transaction/View";
import AddTransaction from "./components/Transaction/Add";
import TransactionDetails from "./components/Transaction/View/TransactionDetails";
import ResetPassword from "./components/ResetPassword";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.props.getUserData();
  }

  static getDerivedStateFromProps(props, state) {
    return props.user;
  }

   protectedRoutes() {
    return (
      <Switch>
        <Route component={AddTransaction} path="/add" />
        <Route component={TransactionDetails} path="/details" />
        <Route component={ResetPassword} path="/reset" />
        <Route component={Transaction} exact path="/transactions" />
      </Switch>
    )
  }

   publicRoutes() {
    return (
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Registration} path="/register" />
      </Switch>
    );
  }
   render() {
     return(
       <div>
       {
         this.state.user.id
         ? this.protectedRoutes()
         : this.publicRoutes()
       }
       </div>
     )
   }
}

const mapStateToProps = state => {
  return {
    user: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => { dispatch(userData()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
