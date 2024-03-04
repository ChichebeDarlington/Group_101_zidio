import Register from "../components/register/register";
import Login from "../components/login/login";

const indexRoutes = [
  {
    name: "Register",
    path: "/",
    component: Register
  },
  {
    name: "Login",
    path: "/login",
    component: Login
  }
];

export { indexRoutes };
