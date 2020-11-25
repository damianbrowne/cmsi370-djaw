import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './assets/theme.js';

import SignUp from './pages/Login/LoginPages/SignUp.js';
import Login from './pages/Login/LoginPages/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import UserProfile from './pages/UserProfile/UserProfile.js';

import Home from './pages/Dashboard/DashboardPages/Home.js';
import Progress from './pages/Dashboard/DashboardPages/Progress.js';
import Topic from './pages/Dashboard/DashboardPages/Topic.js';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Dashboard/:id">
              <Dashboard />
            </Route>
            <Route path="/UserProfile/:id">
              <UserProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function SignUp() {
//   return <h2>SignUp</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }
