import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Question1 from './Question/Question1';
import Question2 from './Question/Question2';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: 4,
    justifyContent: 'center'
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
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
  function clickHandler() {
    console.log('buttom clicked')
  }

  return (
    <div className={classes.root}>
      <Typography 
        component="h1"
        variant="outlined"
        margin="normal"
        align="center"
        padding= "5px">
        Do not panic. This is a survey.
      </Typography>
      {firstMessages.map((item, index) => (
        <Question1 question = {item} index = {index+1}> </Question1>
      ))}   
      <Box textAlign='center'>
        <Button variant='contained' color="primary" onClick={clickHandler}>
          Submit Survey
        </Button>
      </Box>
    </div>
  );
}
