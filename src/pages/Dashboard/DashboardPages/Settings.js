import React from 'react';


import {
    Typography,
    makeStyles,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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

    title: {
        fontWeight:"bold",
        fontSize: 28,
        fontFamily:"Arial",
        paddingBottom: 25,
        paddingTop: 50,
    },

    name: {
        fontWeight:"bold",
        fontSize: 22, 
        fontFamily:"Avenir",
    },

    username: {
        fontSize: 16, 
        fontFamily:"Avenir",
        color:"#CFCFCF"
    }

}),{ name: 'Settings' });

export default function Settings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>Account Settings</Typography>
        <form className={classes.form} noValidate>
            <Typography className={classes.name}>John Doe</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Name"
                id="name"
                autoComplete="name"
            />
            <Typography className={classes.name}>johndoe123</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="username"
                label="Username"
                id="username"
                autoComplete="username"
            />
            <Typography className={classes.name}>johndoe123@gmail.com</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
            <Typography className={classes.name}>John Doe</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Save Changes
            </Button>
        </form>
    </div>
  );
}