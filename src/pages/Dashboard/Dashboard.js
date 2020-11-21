import React from 'react';

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

import HeaderFrame from '../../common/HeaderFrame.js'
import monkey from '../../assets/images/monkey.jpg'

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
    },

    avatar: {
        minWidth: 100,
        maxWidth: 100,
        maxHeight: 100,
        minHeight: 100,
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

export default function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <HeaderFrame />
        <Paper className={classes.profileContainer} elevation={2}>
            <Avatar className={classes.avatar} alt="PROFILE" src={monkey} />
        </Paper>
        <div className={classes.body}>
            <Paper className={classes.leftPanel} elevation={2}>
                <Typography>Menu</Typography>
                <Button>Courses</Button>
                <Button>Progress</Button>
            </Paper>
            <Paper className={classes.rightPanel} elevation={2}>
                RIGHT
            </Paper>
        </div>
    </div>
  );
}