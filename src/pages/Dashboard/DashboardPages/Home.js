import React from 'react';

import {
    Container,
    Avatar,
    Button,
    Paper,
    ButtonGroup,
    TextField,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core'

import { useParams } from 'react-router'
import monkey from '../../../assets/images/monkey.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: 40,
        paddingRight: 40,
        width: "100%",
        backgroundColor: theme.palette.offwhite.main,
        
    },

    profileContainer: {
        minWidth: 1010,
        maxHeight: 150,
        flex: 0.25,
        padding: 25,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        borderRadius: 0,
        backgroundColor:theme.palette.white.main,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
    },

    profileMenu: {
        marginLeft: 20,
        display:"flex",
        flexDirection:"column",
    },

    avatar: {
        minWidth: 100,
        maxWidth: 100,
        maxHeight: 100,
        minHeight: 100,
        borderRadius: 50,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'

    },

    title: {
        fontWeight:"bold",
        fontSize: 28,
        // Arial
        paddingBottom: 25,
        paddingTop: 50,
    },

    name: {
        fontWeight:"bold",
        fontSize: 22, 
        // Avenir
        fontFamily: theme.font.primary,
        // color:"#414141"
    },

    username: {
        fontSize: 16, 
        // Avenir
        fontFamily: theme.font.primary,
        color:"#CFCFCF"
    },

    button: {
        fontSize: 16,
    },

}),{ name: 'Home' });

export default function Home() {
  const classes = useStyles();
  let { id } = useParams()

    const toCustomize = () => {
        window.open("/Customize", "_self");
        console.log("CUSTOMIZE")
    }
    const toSettings = () => {
        window.open("/Settings", "_self");
        console.log("CUSTOMIZE")
    }

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>Welcome back, John</Typography>
        <div className={classes.profileContainer}>
            <img className={classes.avatar} alt="PROFILE" src={monkey}/>
            <div className={classes.profileMenu}>
                <Typography className={classes.name}>John Doe</Typography>
                <Typography className={classes.username}>@johndoe123</Typography>
                {/* <Button>Edit Profile</Button> */}
            </div>
            <ButtonGroup variant="text" color="black" aria-label="text black button group" style={{marginLeft: 720,}}>
                  <Button onClick={toCustomize} disableTouchRipple className={classes.button}>Customize</Button>
                  <Button onClick={toSettings} disableTouchRipple className={classes.button}>Settings</Button>
            </ButtonGroup>
        </div>
    </div>
  );
}