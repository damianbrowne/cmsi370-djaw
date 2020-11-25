import React from 'react';

import {
    TextField,
    Typography,
    makeStyles,
} from '@material-ui/core'

import { useParams } from 'react-router'


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"pink",
    },

}),{ name: 'Settings' });

export default function Settings() {
    const classes = useStyles();
    let { id } = useParams()

    return (
        <div className={classes.root}>
            <Typography>
                SETTINGS
            </Typography>
            Name: <TextField id="standard-basic" label="John Doe" />
            Username: <TextField id="standard-basic" label="johndoe123" />
            Email: <TextField id="standard-basic" label="johndoe123@gmail.com" />
        </div>
    );
}