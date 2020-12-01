import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import monkey from '../../../assets/images/monkey.jpg'
import swoleMonkey from '../../../assets/images/buff_monkey.jpg'
import fancyMonkey from '../../../assets/images/fancy_monkey.jfif'
import meanMonkey from '../../../assets/images/mean_monkey.jfif'





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
        minWidth: 800,
        maxWidth: 800,
        maxHeight: 800,
        minHeight: 800,
        borderRadius: 50,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        alignItems:"center"
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
        fontFamily:"Avenir",
        color:"#CFCFCF"
    },

    paper: {
        padding: 10,
        textAlign: 'center',
    }

}),{ name: 'Customize' });



export default function Customize() {
    const [link, setLink] = useState(monkey);
    const classes = useStyles();    

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLink(monkey)} fullWidth>
                        Defualt Monkey
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLink(fancyMonkey)} fullWidth>
                        Fancy Monkey
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLink(swoleMonkey)} fullWidth>
                        Swole Monkey
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => setLink(meanMonkey)} fullWidth>
                        Mean Monkey
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <img className={classes.customize} alt="Avatar" src={link}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}