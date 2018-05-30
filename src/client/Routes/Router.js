import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Dashboard from "../Components/Dashboard";


export const Private = [
  { path: '/dashboard', exact: true, component: Dashboard }
]

export const Public = [
  { path: '/', exact: true, component: Login },
  { path: '/signup', exact: true, component: Signup }
]

export const indexRouter = [
  { path: '/contact', exact: true, component: Contact}
]