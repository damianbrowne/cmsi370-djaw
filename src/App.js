import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Signup() {
  return <h2>Register</h2>;
}

function Signin() {
  return <h2>Login</h2>;
}
