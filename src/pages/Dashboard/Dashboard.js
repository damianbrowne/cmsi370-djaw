import React, { useState, useContext } from 'react'

import {
    Container,
    Avatar,
    Button,
    Paper,
    TextField,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useParams } from 'react-router'


import HeaderFrame from '../../common/HeaderFrame.js'
import Home from './DashboardPages/Home.js';
import monkey from '../../assets/images/monkey.jpg'
import Progress from './DashboardPages/Progress.js';
import Topic from './DashboardPages/Topic.js';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        minHeight: '100vh',
        // padding: 10,
    },

    profileContainer: {
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        minWidth: 1010,
        maxHeight: 150,
        flex: 0.25,
        padding: 25,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
    },

    avatar: {
        minWidth: 100,
        maxWidth: 100,
        maxHeight: 100,
        minHeight: 100,
    },

    profileMenu: {
        marginLeft: 20,
        display:"flex",
        flexDirection:"column",
    },

    body: {
        display:"flex",
        flexDirection:"row",
        flex: 2,
        margin: 10,

    },

    leftPanel: {
        display:"flex",
        flexDirection:"column",
        flex: .2,
        marginRight: 10,
        minWidth: 250,
        padding: 15,
    },

    rightPanel: {
        display:"flex",
        flex: 1,
        minWidth: 750,
    },

    title: {
        backgroundColor:"blue",
        fontFamily:"Avenir",
        paddingTop: 25,
        paddingBottom: 25
    },

}),{ name: 'Dashboard' });

const Dashboard = props => {
  const classes = useStyles();

// NOT OPTIMAL ROUTING -> RELOADING EVERY TIME ROUTE OCCURS
  const routeToProgress  = () => {
    window.open("/Dashboard/Progress", "_self");
    console.log("PROGRESS")
  }

  const routeToCourses  = () => {
    window.open("/Dashboard/Topic", "_self");
    console.log("COURSES")
  }

  return (
    <div className={classes.root}>
        <HeaderFrame />
        <Paper className={classes.profileContainer} elevation={2}>
            <Avatar className={classes.avatar} alt="PROFILE" src={monkey}/>
            <div className={classes.profileMenu}>
                <Typography>John Doe</Typography>
                <Typography>@johndoe123</Typography>
                <Button>Edit Profile</Button>
            </div>
        </Paper>
        <div className={classes.body}>
            <Paper className={classes.leftPanel} elevation={2}>
                <div className={classes.title}>
                    <Typography>MENU</Typography>
                </div>
                <Button onClick={routeToCourses}>Courses</Button>
                <Button onClick={routeToProgress}>Progress</Button>
            </Paper>
            <Paper className={classes.rightPanel} elevation={2}>
                <Switch>
                    <Route path="/Dashboard/Home">
                        <Home />
                    </Route>
                    <Route path="/Dashboard/Progress">
                        <Progress />
                    </Route>
                    <Route path="/Dashboard/Topic">
                        <Topic />
                    </Route>
                </Switch>
            </Paper>
        </div>
    </div>
  );
}

export default Dashboard;