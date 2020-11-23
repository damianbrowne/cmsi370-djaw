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
        backgroundColor:"green",
    },

}),{ name: 'Courses' });

export default function Courses() {
  const classes = useStyles();
  let { id } = useParams()

  return (
    <div className={classes.root}>
        <Typography>
            COURSES PAGE
        </Typography>
    </div>
  );
}