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
        // backgroundColor:"blue",
    },

}),{ name: 'Customize' });

export default function Customize() {
  const classes = useStyles();
  let { id } = useParams()

  return (
    <div className={classes.profileContainer} elevation={0}>
        <Avatar className={classes.avatar} alt="PROFILE" src={monkey}/>
        <div className={classes.profileMenu}>
            <Typography>John Doe</Typography>
            <Typography>@johndoe123</Typography>
            <Button>Edit Profile</Button>
        </div>
    </div>
  );
}