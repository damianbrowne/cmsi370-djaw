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



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "red",

    },

}),{ name: 'Dashboard' });

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <Typography>
            HELLO
        </Typography>
    </Container>
  );
}