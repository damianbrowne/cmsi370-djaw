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

import { useParams } from 'react-router'
import monkey from '../../../assets/images/monkey.jpg'


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
        // color:"#414141"
    },

    username: {
        fontSize: 16, 
        fontFamily:"Avenir",
        color:"#CFCFCF"
    }

}),{ name: 'Progress' });

export default function Progress() {
  const classes = useStyles();
  let { id } = useParams()

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>Progress</Typography>
    </div>
  );
}