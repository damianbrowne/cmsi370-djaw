import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Question1 from './Question/Question1';
import Question2 from './Question/Question2';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Avatar } from '@material-ui/core';
import logo from "../../assets/images/logo.png";
import { BorderRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: 4,
    backgroundColor: theme.palette.offwhite.main,
  },

  surveyContainer:{
    display:"flex",
    alignSelf:"center",
    flexDirection:"column",
    paddingTop: 50,
    paddingBottom: 50,
  },

  submitContainer: {
    borderRadius: 5,
    paddingTop: 30, 
    paddingBottom: 30,
  },

  title: {
    paddingTop: 15,
    paddingBottom: 0, 
    fontSize: 32, 
    fontFamily: theme.font.primary.main,
    fontWeight:"bold",
    display:"flex", 
    justifyContent:"center", 
    flexDirection:"column"
  },

  header: {
    paddingTop: 5,
    fontSize: 28,
    fontFamily: theme.font.primary.main,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },

  subheader: {
    paddingTop: 5,
    paddingBottom: 30,
    fontFamily: theme.font.primary.main,
    fontSize: 20,
    fontWeight: "regular",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },

  button: {
    paddingLeft: 25, 
    paddingRight: 25, 
    paddingTop: 12, 
    paddingBottom: 12,  
    color: "white",
    fontSize: 16, 
    fontWeight:"bold",
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  }
}));

const firstMessages = [ "...stand and balance on each foot for 10 seconds", 
                        "...walk along a line", 
                        "...hang and move across monkey bars without support",
                        "...hop on one foot 10 times",
                        "...jump forward with both feet together",
                        "...kick a ball toward a target",
                        "...catch a tennis ball using hands only (no trapping against chest)",
                        "...throw a ball stepping forward with leg on the same side as the throwing arm",
                        "...jump rope", 
                        "...riding a bike without training wheels"]


export default function Survey() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.surveyContainer}>
        <Typography 
          component="h1" 
          align="center"
          className={classes.title}
        >
          <Avatar src={logo} style = {{marginRight: 10, display:"flex", alignSelf:"center",marginBottom: 25, minWidth: 100, minHeight: 100,}}/>
        </Typography>
        <Typography align="center" className={classes.header}>My child can...</Typography>
        <Typography align="center" className={classes.subheader}>Answer these questions so that we can help provide experience tailored to your child's needs.</Typography>
        {firstMessages.map((item, index) => (
          <Question1 question = {item} index = {index+1}> </Question1>
        ))}
          <Question2 question = {"On a scale of 1-5 (1 being very poor, and 5 being very good), my child's ability to run around while maintaining balance is a"} index = {11}></Question2>
        <Box textAlign='center' className={classes.submitContainer}>
          <Button 
            variant='contained' 
            color="primary"
            href="/Home"
            className={classes.button}
            elevation={0}
          >
            Submit Survey
          </Button>
        </Box>
      </div>

    </div>
  );
}
