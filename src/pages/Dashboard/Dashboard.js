import React from 'react'

import {
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core'

import {
    Switch,
    Route,
    HashRouter,
  } from "react-router-dom";

import HeaderFrame from '../../common/HeaderFrame.js'
import Home from './DashboardPages/Home.js';
import Progress from './DashboardPages/Progress.js';
import Topic from './DashboardPages/Topic.js';
import Settings from './DashboardPages/Settings.js';
import Customize from './DashboardPages/Customize.js';

import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        minHeight: '100vh',
        backgroundColor: theme.palette.offwhite.main,
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
        backgroundColor:theme.palette.white.main,
        borderRadius: 0,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
    },

    rightPanel: {
        display:"flex",
        flex: 1,
        minWidth: 750,
    },

    title: {
        color: theme.palette.black.main,
        fontFamily: theme.font.primary,
        justifyContent:"center",
        paddingTop: 32,
        paddingBottom: 18,
        paddingLeft: 27,
        fontSize: 19,
    },
    
    menuItem: {
        justifyContent:"left",
        backgroundColor: theme.palette.white.main,
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 27,
        borderRadius: 0,
    },
    
    menuIcon: {
        marginRight: 30, 
        color:"#1a1a1a"
    }, 

    menuText: {
        textTransform:"none", 
        color: theme.palette.black.main,
        fontWeight:"bold",
        fontFamily: theme.font.primary,
        fontSize: 18,
    }

}),{ name: 'Dashboard' });

const Dashboard = () => {
  const classes = useStyles();

  // NOT OPTIMAL ROUTING -> RELOADING EVERY TIME ROUTE OCCURS
  const routeToProgress  = () => {
    window.open("/Progress", "_self");
    console.log("PROGRESS")
  }

  const routeToCourses  = () => {
    window.open("/Topic", "_self");
    console.log("Courses");
    // <HashRouter>
    //     <Route path="/Topic" component={Topic}>
    //         <Topic />
    //     </Route>
    // </HashRouter>
    // window.open("/Topic", "_self");
    // console.log("COURSES")
  }

  const routeToHome  = () => {
    window.open("/Home", "_self");
    console.log("HOME")
  } 

  return (
    <div className={classes.root}>
        <HeaderFrame />
        <div className={classes.body}>
            <div className={classes.leftPanel} elevation={0}>
                <Typography className={classes.title}>MENU</Typography>
                <Button onClick={routeToHome} className={classes.menuItem} disableTouchRipple>
                    <HomeIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Home</Typography>
                </Button>
                <Button onClick={routeToCourses} className={classes.menuItem} disableTouchRipple>
                    <AccessibilityNewIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Exercises</Typography>
                </Button>
                {/* <Button onClick={routeToProgress} className={classes.menuItem} disableTouchRipple>
                    <BarChartIcon className={classes.menuIcon}/>
                    <Typography className={classes.menuText}>Progress</Typography>
                </Button> */}
            </div>
            <div className={classes.rightPanel}>
                <Switch>
                    <Route path="/Customize">
                        <Customize />
                    </Route>
                    <Route path="/Settings">
                        <Settings />
                    </Route>
                    <Route path="/Progress">
                        <Progress />
                    </Route>
                    <Route path="/Topic">
                        <Topic />
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;