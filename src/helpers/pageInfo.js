import Login from "../components/Login";
import Registration from "../components/Registration";
import Transaction from "../components/Transaction"
import ResetPassword from "../components/ResetPassword";

const pageInfo = {
  pages: [{
    title: "Login",
    url: "/login",
    component: Login,
  }, {
    title: "Registration Page",
    url: "/register",
    component: Registration,
  }, {
    title: "Transactions",
    url: "/transactions",
    component: Transaction,
  }, {
    title: "Reset Password",
    url: "/reset",
    component: ResetPassword,
  }],
};

export default pageInfo;
