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
        backgroundColor:"red",
    },

}),{ name: 'Progress' });

export default function Progress() {
  const classes = useStyles();
  let { id } = useParams()

  return (
    <div className={classes.root}>
        <Typography>
            PROGRESS PAGE
        </Typography>
    </div>
  );
}