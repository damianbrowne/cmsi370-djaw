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
import Survey from './pages/Survey/Survey.js';
import HeaderFrame from './common/HeaderFrame.js'
import Home from './pages/Dashboard/DashboardPages/Home.js';
import Progress from './pages/Dashboard/DashboardPages/Progress.js';
import Topic from './pages/Dashboard/DashboardPages/Topic.js';
import Settings from './pages/Dashboard/DashboardPages/Settings.js';
import Customize from './pages/Dashboard/DashboardPages/Customize.js';

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
            <Route path="/Home">
              <Dashboard />
            </Route>
            <Route path="/Survey">
              <Survey />
            </Route>
            <Route path="/Topic">
              <Dashboard />
            </Route>
            <Route path="/Settings">
              <Dashboard />
            </Route>
            <Route path="/Customize">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
