import React from "react";
import { connect } from "react-redux";

import { logout } from "../../actions/user";

class Logout extends React.Component {

  componentDidMount() {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div> Logout </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);
