import React from 'react';

import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core'

import Video from './Video.js';

import yogaImage from '../../../assets/images/yoga.jpg';
import stretchImage from '../../../assets/images/stretch.jpg';
import ballImage from '../../../assets/images/ball.jpeg';



const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:"column",
        paddingLeft: 40,
        width: "100%",
    },

    title: {
        fontWeight:"bold",
        fontSize: 28,
        // Arial
        fontFamily:"Roboto",
        paddingBottom: 65,
        paddingTop: 50,
    },

    videoContainer: {
        display:"flex",
    }

}),{ name: 'Courses' });

export default function Courses() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <Video 
                title="Yoga Warmup with Animals"
                description="Get your day started with some yoga... with animals!" 
                image={yogaImage}
                link="https://www.youtube.com/embed/5XCQfYsFa3Q"
                percent={35}
            />
        </Grid>
        <Grid item xs={4}>
            <Video 
                title="Kick the Ball" 
                description="Follow along to the rhythm and up your ball coordination!"
                image={ballImage}
                link="https://www.youtube.com/embed/ePpqEeUErUc"
                percent={76}
            />
        </Grid>
        <Grid item xs={4}>
            <Video 
                title="Fly Like a Bird"
                description="Jumping jacks the fun way! Practice coordination and get moving!" 
                image={stretchImage}
                    link="https://www.youtube.com/embed/sJ9NBBLU6lY"
                percent={0}
            />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>
            My Exercises
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