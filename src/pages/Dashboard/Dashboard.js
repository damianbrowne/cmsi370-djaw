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

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red",

    },

}),{ name: 'Dashboard' });

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <HeaderFrame />
        <Typography>
            HELLO
        </Typography>
    </Container>
  );
}