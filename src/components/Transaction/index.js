import React from "react";
import { connect } from 'react-redux'

import { addTransaction } from "../../actions/transactions";

import "./index.css";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      access_code: 0,
      splash_page: 0,
      mpesa: 0,
      autoplay: 0,
      comments: "",
      registration_status: "",
      customer_first_name: "",
      customer_last_name: "",
      customer_age: 0,
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
    this.props.addTransaction(this.state);
  }

  render() {
    return (
      <div id="transaction-form">
        <fieldset>
          <legend>Transaction Page</legend>
          <form onSubmit={this.onSubmit}>
            <div id="transaction-details">
              <div id="transaction-info">
                <p> Transaction Details </p>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  onChange={this.onChange}/> <br />

                <label htmlFor="access_code">Access Code</label>
                <input
                  type="text"
                  id="access_code"
                  name="access_code"
                  onChange={this.onChange}/> <br />

                <label htmlFor="splash_page">Splash Page</label>
                <select id="splash_page" name="splash_page" onChange={this.onChange}>
                  <option value={0}>Choose Option</option>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select> <br />

                <label htmlFor="mpesa">Mpesa</label>
                <select id="mpesa" name="mpesa" onChange={this.onChange}>
                  <option value={0}>Choose Option</option>
                  <option value={0}>No</option>
                  <option value={0}>Yes</option>
                </select> <br />

                <label htmlFor="autoplay">Autoplay</label>
                <select id="autoplay" name="autoplay" onChange={this.onChange}>
                  <option value={0}>Choose Option</option>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select> <br />

                <label htmlFor="comments">Comments</label>
                <input
                  type="text"
                  id="comments"
                  name="comments"
                  onChange={this.onChange}/> <br />

                <label htmlFor="registration_status">Registration Status</label>
                <input
                  type="text"
                  id="registration_status"
                  name="registration_status"
                  onChange={this.onChange}/> <br />
              </div>

              <div id="customer-info">
                <p> Customer Information </p>
                <label htmlFor="customer_first_name">Customer First Name</label>
                <input
                  type="text"
                  id="customer_first_name"
                  name="customer_first_name"
                  onChange={this.onChange}/> <br />

                <label htmlFor="customer_last_name">Customer Last Name</label>
                <input
                  type="text"
                  id="customer_last_name"
                  name="customer_last_name"
                  onChange={this.onChange}/> <br />

                <label htmlFor="customer_age">Customer Age</label>
                <input
                  type="number"
                  id="customer_age"
                  name="customer_age"
                  onChange={this.onChange}/> <br />
              </div>
            </div>
            <input type="submit" value="Add Transaction" />
          </form>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { transactions: state }
}

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: data => { dispatch(addTransaction(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
