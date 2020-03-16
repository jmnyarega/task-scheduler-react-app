import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

class TransactionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: this.props.location.state.transaction
    }
  }

  render() {
    const {
      customer_first_name,
      customer_last_name,
      customer_age,
      customer_gender,
      customer_phone_number,
      comments,
      location,
      Tasks,
    } = this.state.transaction;
    return (
    <div id="single-transaction">
      <fieldset>
        <legend>{this.state.transaction.id}</legend>
        <div id="details">
           <div id="customer-details">
           <strong>
             {
               (customer_first_name || customer_last_name)
               ? `${customer_first_name} ${customer_last_name}`
               : "no name"
             }
             </strong>
             <p>{(customer_phone_number || "unknown phone number")}</p>
             <p> Lives in {(location || "<no location>")}</p>
             <p>{(customer_gender || "unknown gender")}</p>
             <p>{(customer_age || "unknown age")}</p>
             <p>Comments: {(comments || "no comments")}</p>
           </div>
           <div id="job-details">
             <strong>Job Details</strong>
             <p>{(Tasks[0].status || "inactive")}</p>
             <p>Assigned: {(Tasks[0].assigned || "not assigned yet")}</p>
             <p>Complete: {(Tasks[0].completed || "not completed yet")}</p>
             <p>Access Code: {(Tasks[0].access_code || "no access code")}</p>
             <p>Autoplay: {(Tasks[0].autoplay || "no autoplay")}</p>
             <p>Deffered: {(Tasks[0].deffered || "")}</p>
             <p>In Progress: {(Tasks[0].in_progress || "not running yet")}</p>
           </div>
        </div>
      </fieldset>
    </div>
    )
  }
}


export default TransactionDetails;
