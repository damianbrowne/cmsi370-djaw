import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from "../../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: 20,
    minHeight: '100vh',
    backgroundColor: theme.palette.offwhite,
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.white,
    paddingTop: 20,
    paddingBottom: 35,
    paddingRight: 50, 
    paddingLeft: 50, 
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
  },
  avatar: {
    margin: theme.spacing(1),
    minWidth: 75, 
    minHeight: 75, 
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
    color:"white", 
    fontSize: 18, 
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.0)',
    borderRadius: 5,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const toHomePage  = () => {
    window.open("/Survey", "_self");
    console.log("HOME")
  }
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={logo} />
          {/* <Typography component="h1" variant="h5" style={{ marginBottom: 20 }}>
            Sign Up
        </Typography> */}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  name="userName"
                  id="userName"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="fname"
                  //autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Subscribe for email notifications"
                />
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={toHomePage}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="./Login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={4}>
        <Copyright />
      </Box> */}
      </Container>
    </div>
  );
}