import { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import { 
  AppBar, 
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Popover,
  Paper,
  
} from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
  },

  menuButton: {
    marginLeft: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    color:"white",
    fontWeight:"bold",
    textDecoration:"none",
    fontSize: 24,
  },

  popoverPaper: {
    minWidth: 300,
    maxWidth: 300,
    paddingTop: 15,
    paddingBottom: 15,
  },

  popoverMenu: {
    flex: 1, 
    display:"flex",
    flexDirection:"column",
  },

  accountButtons: {
    marginRight: 10
  }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null)

    const handleAvatarClick = event => {
        setAnchor(event.currentTarget) // visually anchor the popup to the button
    }

    const handleAvatarClose = () => setAnchor(null)

    const routeToSettings  = () => {
        window.open("/UserProfile/Settings", "_self");
        console.log("SETTINGS")
    }

    const routeToLogIn  = () => {
        window.open("/Login", "_self");
        console.log("SETTINGS")
    }

    const routeToSignup  = () => {
        window.open("/Signup", "_self");
        console.log("SETTINGS")
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/Dashboard/Home" className={classes.title}>
                        Relab
                    </Link>
                    <Button 
                        variant="outlined" 
                        className={classes.accountButtons}
                        onClick={routeToLogIn}
                    >
                        Login
                    </Button>
                    <Button 
                        variant="outlined" 
                        className={classes.accountButtons}
                        onClick={routeToSignup}
                    > 
                        Sign Up
                    </Button>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleAvatarClick}>
                        <MenuIcon />
                    </IconButton>
                    <Popover
                        classes={{paper: classes.popoverPaper}}
                        anchorEl={anchor}
                        open={Boolean(anchor)}
                        onClose={handleAvatarClose}
                        anchorOrigin={{
                            // Location of the anchor on the button
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            // Anchor on the popover itself
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <div className={classes.popoverMenu}>
                            <Button onClick={routeToSettings}>
                                Settings
                            </Button>
                            <Button>
                                Customization
                            </Button>
                        </div>
                    </Popover>
                </Toolbar>
            </AppBar>
        </div>
    );
}