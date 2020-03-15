import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signUp } from "../../actions/user";

import "./index.css";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
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
    this.props.signUp(this.state)
  }

  render() {
    return (
      <div id="register-form">
        <fieldset>
          <legend>Registration Page</legend>
          <form onSubmit={this.onSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.onChange}/> <br/>

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
                  onChange={this.onChange}/><br/>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.onChange}/> <br/>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.onChange}/> <br />

            <input type="submit" value="Register" />
          </form>
          <div>Already registered? login <Link to="/transaction"> here </Link></div>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state }
}

const mapDispatchToProps = dispatch => {
  return { signUp:  data => dispatch(signUp(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
