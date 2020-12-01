import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import monkey from '../../../assets/images/monkey.jpg'
import swoleMonkey from '../../../assets/images/buff_monkey.jpg'
import fancyMonkey from '../../../assets/images/fancy_monkey.jfif'
import cuteMonkey from '../../../assets/images/cute_monkey.jfif'
import { Typography } from '@material-ui/core';





const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: 40,
        paddingRight: 40,
        width: "100%",
    },

    profileContainer: {
        minWidth: 1010,
        maxHeight: 150,
        flex: 0.25,
        padding: 25,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"white",
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

    customize: {
        minWidth: 700,
        maxWidth: 700,
        maxHeight: 700,
        minHeight: 700,
        borderRadius: 20,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        alignItems:"center",
        marginLeft: 20,
    },

    title: {
        fontWeight:"bold",
        fontSize: 28,
        // Avenir
        fontFamily:"Roboto",
        paddingBottom: 25,
        paddingTop: 50,
    },

    name: {
        fontWeight:"bold",
        fontSize: 22, 
        // Avenir
        fontFamily:"Roboto",
    },

    username: {
        fontSize: 16, 
        // Avenis
        fontFamily:"Roboto",
        color:"#CFCFCF"
    },

    paper: {
        // padding: 10,
        textAlign: 'center',
        // backgroundColor: "rgba(0,0,0,0)"
    },

    container: {
        display:"flex",
    },

    buttons: {
        display:"flex",
        flexDirection:"column"
    },

    button: {
        paddingLeft: 25, 
        paddingRight: 25, 
        paddingTop: 12, 
        paddingBottom: 12,
        backgroundColor: "white",  
        color: "#1a1a1a",
        fontSize: 16, 
        // fontWeight:"bold",
        textTransform:"none",
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        marginBottom: 25,
      }

}),{ name: 'Customize' });



export default function Customize() {
    const [link, setLink] = useState(monkey);
    const classes = useStyles();    

    return (
        <div className={classes.root}>
            <Typography className={classes.title}> Customize My Monkey</Typography>
            <div className={classes.container}>
                <div className={classes.buttons}>
                    <Button className={classes.button} onClick={() => setLink(monkey)} fullWidth elevation={0} disableTouchRipple>
                        Defualt Monkey
                    </Button>
                    <Button className={classes.button} onClick={() => setLink(fancyMonkey)} fullWidth disableTouchRipple>
                        Fancy Monkey
                    </Button>
                    <Button className={classes.button} onClick={() => setLink(swoleMonkey)} fullWidth disableTouchRipple>
                        Swole Monkey
                    </Button>
                    <Button className={classes.button} onClick={() => setLink(cuteMonkey)} fullWidth disableTouchRipple>
                        Cute Monkey
                    </Button>
                </div>
                <img className={classes.customize} alt="Avatar" src={link}/>
            </div>

        </div>
    );
}