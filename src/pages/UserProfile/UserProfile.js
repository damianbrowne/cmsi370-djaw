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
import monkey from '../../assets/images/monkey.jpg'
import Settings from './UserProfilePages/Settings.js';
import Customization from './UserProfilePages/Customization.js';

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

}),{ name: 'Dashboard' });

const Dashboard = props => {
    const classes = useStyles();
    //   const { page } = props
    //   let { id } = useParams()


    // NOT OPTIMAL ROUTING -> RELOADING EVERY TIME ROUTE OCCURS
    const routeToSettings  = () => {
        window.open("/UserProfile/Settings", "_self");
        console.log("SETTINGS")
    }

    const routeToCustomization  = () => {
        window.open("/UserProfile/Customization", "_self");
        console.log("CUSTOMIZATION")
    }

    const routeToHome  = () => {
        window.open("/Dashboard/Home", "_self");
        console.log("HOME")
    }

    return (
        <div className={classes.root}>
            <HeaderFrame />
            <Paper className={classes.profileContainer} elevation={2}>
                <Avatar className={classes.avatar} alt="PROFILE" src={monkey}/>
                <div className={classes.profileMenu}>
                    <Typography>John Doe</Typography>
                    <Typography>@johndoe123</Typography>
                    <Button onClick={routeToSettings}>Edit Profile</Button>
                </div>
            </Paper>
            <div className={classes.body}>
                <Paper className={classes.leftPanel} elevation={2}>
                    <Typography>Menu</Typography>
                    <Button onClick={routeToHome}>Home</Button>
                    <Button onClick={routeToSettings}>Settings</Button>
                    <Button onClick={routeToCustomization}>Customization</Button>
                </Paper>
                <Paper className={classes.rightPanel} elevation={2}>
                    <Switch>
                        <Route path="/Dashboard/Home">
                            <Customization />
                        </Route>
                        <Route path="/UserProfile/Settings">
                            <Settings />
                        </Route>
                        <Route path="/UserProfile/Customization">
                            <Customization />
                        </Route>
                    </Switch>
                </Paper>
            </div>
        </div>
    );
}

export default Dashboard;