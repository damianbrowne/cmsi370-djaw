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
  } from "react-router-dom";

import HeaderFrame from '../../common/HeaderFrame.js'
import Home from './DashboardPages/Home.js';
import monkey from '../../assets/images/monkey.jpg'
import Progress from './DashboardPages/Progress.js';
import Topic from './DashboardPages/Topic.js';

import AppsIcon from '@material-ui/icons/Apps';
import SubjectIcon from '@material-ui/icons/Subject';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';

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
        backgroundColor:"white",
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
        backgroundColor:"white",
    },

    rightPanel: {
        display:"flex",
        flex: 1,
        minWidth: 750,
    },

    title: {
        color: "#CFCFCF",
        fontFamily:"Arial",
        paddingTop: 32,
        paddingBottom: 18,
        paddingLeft: 27,
        fontSize: 19,
    },
    
    menuItem: {
        justifyContent:"left",
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 27,
        borderRadius: 0,
    },
    
    menuIcon: {
        marginRight: 30, 
        color:"#000000"
    }, 

    menuText: {
        textTransform:"none", 
        color: "#292F36", 
        fontWeight:"bold",
        fontFamily:"Avenir",
        fontSize: 18,
    }

}),{ name: 'Dashboard' });

const Dashboard = props => {
  const classes = useStyles();

// NOT OPTIMAL ROUTING -> RELOADING EVERY TIME ROUTE OCCURS
  const routeToProgress  = () => {
    window.open("/Progress", "_self");
    console.log("PROGRESS")
  }

  const routeToCourses  = () => {
    window.open("/Topic", "_self");
    console.log("COURSES")
  }

  const routeToHome  = () => {
    window.open("/", "_self");
    console.log("HOME")
  }

  return (
    <div className={classes.root}>
        <HeaderFrame />
        {/* <div className={classes.profileContainer} elevation={0}>
            <Avatar className={classes.avatar} alt="PROFILE" src={monkey}/>
            <div className={classes.profileMenu}>
                <Typography>John Doe</Typography>
                <Typography>@johndoe123</Typography>
                <Button>Edit Profile</Button>
            </div>
        </div> */}
        <div className={classes.body}>
            <div className={classes.leftPanel} elevation={0}>
                <Typography className={classes.title}>MENU</Typography>
                <Button onClick={routeToHome} className={classes.menuItem} disableTouchRipple>
                    <AppsIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Home</Typography>
                </Button>
                <Button onClick={routeToCourses} className={classes.menuItem} disableTouchRipple>
                    <SubjectIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Courses</Typography>
                </Button>
                <Button onClick={routeToProgress} className={classes.menuItem} disableTouchRipple>
                    <BarChartIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Progress</Typography>
                </Button>
            </div>
            <div className={classes.rightPanel}>
                <Switch>
                    <Route path="/Progress">
                        <Progress />
                    </Route>
                    <Route path="/Topic">
                        <Topic />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;