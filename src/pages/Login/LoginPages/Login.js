import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
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
    paddingTop: 30,
    paddingBottom: 35,
    paddingRight: 50, 
    paddingLeft: 50, 
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)'
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
    borderRadius: 0,
  },
}));

export default function Login() {
  const classes = useStyles();
  const toHomePage  = () => {
    window.open("/", "_self");
    // console.log("HOME")
  }
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={logo} />
          <Typography component="h1" variant="h5">
            Login
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={toHomePage}
            >
              Login
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="https://cdn.cnn.com/cnnnext/dam/assets/160107100400-monkey-selfie-exlarge-169.jpg" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="./SignUp" variant="body2">
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}