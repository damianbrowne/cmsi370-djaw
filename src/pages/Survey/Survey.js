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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: 4,
  },

  surveyContainer:{
    display:"flex",
    alignSelf:"center",
    flexDirection:"column",
    paddingTop: 50,
    paddingBottom: 50,
  },

  submitContainer: {
    paddingTop: 30, 
    paddingBottom: 30,
  },

  title: {
    paddingTop: 25,
    paddingBottom: 50, 
    fontSize: 32, 
    fontWeight:"bold",
    display:"flex", 
    justifyContent:"center", 
    flexDirection:"column"
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
    borderRadius: 0,
  }
}));

const firstMessages = ["Ideo sumi sae ima ente rari novi?", 
                       "Contrariae aliquoties affirmabam parentibus ad deprehendi mo?", 
                       "Ac nunc illi ii fide?",
                       "Judicio finitae invenio eam claudam fuerunt sed vel majoris?",
                       "Enitar fingam scioli ut latera im habens ac me?",
                       "Rem summum ope eae notatu sicuti calida causas?",
                        "Machinam assidere circulum in facultas ab?",
                        "Haberem volebam tur verarum mallent etc una seu referam ignotae?",
                        "Heri sic rum ante sine quas fas modi?", 
                        "Nos creasse pendere crescit angelos etc?"]


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
          Do not panic. This is a survey.
        </Typography>
        {firstMessages.map((item, index) => (
          <Question1 question = {item} index = {index+1}> </Question1>
        ))}   
        <Box textAlign='center' className={classes.submitContainer}>
          <Button 
            variant='contained' 
            color="primary" 
            href="/"
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
