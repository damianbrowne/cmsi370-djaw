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
import Video from './Video.js';


import yogaImage from '../../../assets/images/yoga.jpg';
import stretchImage from '../../../assets/images/stretch.jpg';
import ballImage from '../../../assets/images/ball.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: 40,
        width: "100%",
        // backgroundColor:"red"
    },

    title: {
        fontWeight:"bold",
        fontSize: 28,
        fontFamily:"Arial",
        paddingBottom: 65,
        paddingTop: 50,
    },

    videoContainer: {
        display:"flex",
        // backgroundColor:"blue"
    }

}),{ name: 'Courses' });

export default function Courses() {
  const classes = useStyles();
  let { id } = useParams()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <Video title="Yoga Therapy" description="Start this lesson with yoga stretches etc and work your way up!" image={yogaImage}/>
        </Grid>
        <Grid item xs={4}>
            <Video title="Ball Catch" description="Learn the fundamentals of hand-eye coordination and master these skills." image={ballImage} />
        </Grid>
        <Grid item xs={4}>
            <Video title="Fun Stretches" description="Go through some fun stretches to start the day right." image={stretchImage}/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>
            Live Classes
        </Typography>
        <div className={classes.videoContainer}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    </div>
  );
}