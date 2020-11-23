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


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"blue",
    },

}),{ name: 'Home' });

export default function Home() {
  const classes = useStyles();
  let { id } = useParams()

  return (
    <div className={classes.root}>
        <Typography>
            HOME PAGE
        </Typography>
    </div>
  );
}