import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { getAllTransactions } from "../../../actions/transactions";

import "../index.css";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    this.props.getAllTransactions()
  }

  static getDerivedStateFromProps(props, state) {
      return props.transactions.length ?
      { transactions:  props.transactions[0].transactions } :
      { transactions: [] }
  }

  render() {
    return (
    <div id="transaction-view">
      <fieldset>
        <legend>All Transactions</legend>
        <table id="transaction-table">
          <thead>
          <tr>
              <th>Id</th>
              <th>Customer Name</th>
              <th>Access Code</th>
              <th>Status</th>
              <th>Assigned</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.state.transactions.map(transaction => {
              return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{`${transaction.customer_first_name} ${transaction.customer_last_name}`}</td>
                <td>{transaction.access_code}</td>
                <td>{transaction.Tasks[0].status}</td>
                <td>{transaction.Tasks[0].assigned}</td>
                <td><Link to= {{
                      state: { transaction },
                      pathname: 'details',
                      }}>
                      More Details
                    </Link>
                </td>
              </tr>
            )})
          }
          </tbody>
        </table>
      </fieldset>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    transactions: state.transactions
})

const mapDispatchToProps = dispatch => {
  return {
    getAllTransactions: data => { dispatch(getAllTransactions(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
