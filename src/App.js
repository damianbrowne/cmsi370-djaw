import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD
import Register from './Register';
import Login from './Login';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

=======
import { ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './assets/theme.js';

import SignUp from './pages/Login/LoginPages/SignUp.js';
import Login from './pages/Login/LoginPages/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

import Home from './pages/Dashboard/DashboardPages/Home.js';
import Progress from './pages/Dashboard/DashboardPages/Progress.js';
import Topic from './pages/Dashboard/DashboardPages/Topic.js';

>>>>>>> 6bbf63f6e21236e812ba2845e3235fae2481a970
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
<<<<<<< HEAD
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
=======
                <Link to="/Dashboard/Home">Home</Link>
              </li>
              <li>
                <Link to="/SignUp">Signup</Link>
>>>>>>> 6bbf63f6e21236e812ba2845e3235fae2481a970
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>
<<<<<<< HEAD

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Register">
              <Register />
=======
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/SignUp">
              <SignUp />
>>>>>>> 6bbf63f6e21236e812ba2845e3235fae2481a970
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
<<<<<<< HEAD
            <Route path="/">
              <Register />
=======
            <Route path="/Dashboard/:id">
              <Dashboard />
>>>>>>> 6bbf63f6e21236e812ba2845e3235fae2481a970
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
function Home() {
  return <h2>Home</h2>;
}

function Signup() {
  return <h2>Register</h2>;
}

function Signin() {
  return <h2>Login</h2>;
}
=======
// function Home() {
//   return <h2>Home</h2>;
// }

// function SignUp() {
//   return <h2>SignUp</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }
>>>>>>> 6bbf63f6e21236e812ba2845e3235fae2481a970
