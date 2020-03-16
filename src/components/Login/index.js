import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { login } from "../../actions/user";
import "./index.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: {},
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props.user
  }

  shouldComponentUpdate(nextProps, nextState) {
      if (nextState.login.id) {
        this.props.history.push("/transactions");
      }
      return true;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div id="login-form">
        <fieldset>
          <legend>Login Page</legend>
          <form onSubmit={this.onSubmit}>

            <label htmlFor="username">Username </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}/> <br />

            <label htmlFor="password">Password </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.onChange}/> <br />

            <input type="submit" value="Login" />
          </form>
          <div>Not registered? signup <Link to="/register"> here </Link></div>
          <div>Forget Password? reset <Link to="/reset"> here </Link></div>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
