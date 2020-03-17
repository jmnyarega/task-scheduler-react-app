import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <div>
        <div>
         <Link to="/transactions"> Transactions </Link> |
         <Link to="/add"> New Transactions </Link> |
         <Link to="/logout"> Logout </Link>
        </div>
        <hr />
      </div>
  )
}

export default NavBar;
