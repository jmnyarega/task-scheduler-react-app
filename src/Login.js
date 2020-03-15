import React from "react";
import { connect } from "react-redux"

import { login } from "./actions/user";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    // send to database for authentication
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Login Page</legend>
          <form onSubmit={this.onSubmit}>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.onChange}/><br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.onChange}/><br />

            <input type="submit" value="Login" />
          </form>
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
