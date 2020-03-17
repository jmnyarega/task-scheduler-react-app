import React from "react";
import { connect } from "react-redux";

import NavBar from "../Navbar";
import { resetPassword } from "../../actions/user";
import "./index.css";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      confirm_password: "",
      username:"",
      message: "",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      message: props.user.resetPassword.message,
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message === "reset successful") {
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
    this.props.resetPassword(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div id="reset-form">
          <fieldset>
            <legend>Reset Password</legend>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="current_password">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}/><br />

              <label htmlFor="current_password">Current Password</label>
              <input
                type="password"
                id="current_password"
                name="current_password"
                onChange={this.onChange}/><br />

              <label htmlFor="new_password">New Password</label>
              <input
                type="password"
                id="new_password"
                name="new_password"
                onChange={this.onChange}/><br />

              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                onChange={this.onChange}/><br />

              <input type="submit" value="Reset Password" />
              <p> {this.state.message  && this.state.message } </p>
            </form>
          </fieldset>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { user: state }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: data => dispatch(resetPassword(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
