import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
})); 

const Question1 = (props) => {
const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar>{props.index}</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography>{props.question}</Typography>
                <RadioGroup row>
                  <FormControlLabel value={'True'} control={<Radio />} label = {'True'} />
                  <FormControlLabel value={'False'} control={<Radio />} label = {'False'} />
                </RadioGroup>
              </Grid>
            </Grid>
        </Paper>
    )
};

export default Question1;