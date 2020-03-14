import React from "react";
import ReactDom from "react-dom";

import Login from "./Login";
import Registration from "./Registration";
import Transaction from "./Transaction";

const Index = () => {
  return (
    <div>
      <Transaction />
    </div>
  )
}

ReactDom.render(<Index/>, document.getElementById("root"));
