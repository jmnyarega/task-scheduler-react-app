import React from "react";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      access_code: "",
      splash_page: "",
      mpesa: "",
      autoplay: "",
      comments: "",
      registration_status: "",
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
    console.log(this.state);
    // send to database for add transaction
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Transaction Page</legend>
          <form onSubmit={this.onSubmit}>

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              onChange={this.onChange}/><br />

            <label htmlFor="access_code">Access Code</label>
            <input
              type="text"
              id="access_code"
              name="access_code"
              onChange={this.onChange}/><br />

            <label htmlFor="splash_page">Splash Page</label>
            <input
              type="text"
              id="splash_page"
              name="splash_page"
              onChange={this.onChange}/><br />

            <label htmlFor="mpesa">Mpesa</label>
            <input
              type="text"
              id="mpesa"
              name="mpesa"
              onChange={this.onChange}/><br />

            <label htmlFor="autoplay">Autoplay</label>
            <input
              type="text"
              id="autoplay"
              name="autoplay"
              onChange={this.onChange}/><br />

            <label htmlFor="comments">Comments</label>
            <input
              type="text"
              id="comments"
              name="comments"
              onChange={this.onChange}/><br />

            <label htmlFor="registration_status">Registration Status</label>
            <input
              type="text"
              id="registration_status"
              name="registration_status"
              onChange={this.onChange}/><br />

            <input type="submit" value="Add Transaction" />
          </form>
        </fieldset>
      </div>
    )
  }
}

export default Transaction;
