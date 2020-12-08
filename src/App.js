import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './assets/theme.js';

import SignUp from './pages/Login/LoginPages/SignUp.js';
import Login from './pages/Login/LoginPages/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Survey from './pages/Survey/Survey.js'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Survey">
              <Survey />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
