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
        // Arial
        fontFamily:"Roboto",
        paddingBottom: 25,
        paddingTop: 50,
    },

    label: {
        fontSize: 18,
        fontFamily:"Roboto",
        marginBottom: 8,
    },

    input: {
        marginBottom: 25,
        marginRight: 25
    },
    row: {
        display:"flex",
    },

    submit: {
        marginTop: 25,
        width: 200,
    }

}),{ name: 'Settings' });

export default function Settings() {
  const classes = useStyles();
  const routeToHome  = () => {
    window.open("/", "_self");
    console.log("HOME")
  }
  return (
    <div className={classes.root}>
        <Typography className={classes.title}>Account Settings</Typography>
        <form className={classes.form} noValidate>
            <div className={classes.row}>
                <div>
                    <Typography className={classes.label}>Name</Typography>
                    <TextField
                        variant="outlined"
                        label="John Doe"
                        className={classes.input}
                    />
                </div>
                <div>
                    <Typography className={classes.label}>Username</Typography>
                    <TextField
                        variant="outlined"
                        label="johndoe123"
                        className={classes.input}
                        style={{width: 225,}}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div>
                    <Typography className={classes.label}>Email Address</Typography>
                    <TextField
                        variant="outlined"
                        label="johndoe123@gmail.com"
                        className={classes.input}
                        style={{width: 225,}}
                    />
                </div>
                <div>
                    <Typography className={classes.label}>Password</Typography>
                    <TextField
                        variant="outlined"
                        label="*********"
                        className={classes.input}
                    />
                </div>
            </div>
        </form>
        <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={routeToHome}
        >
            Save Changes
        </Button>
    </div>
  );
}