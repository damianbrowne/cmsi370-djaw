import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
})); 

const Question2 = (props) => {
  const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap">
              <Grid item>
                <Avatar></Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{props.question}</Typography>

                <RadioGroup row>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <FormControlLabel value={`${item}`} control={<Radio />} label = {`${item}`} />
                  ))}    
                </RadioGroup>

              </Grid>
            </Grid>
        </Paper>
    )
};

export default Question2;
