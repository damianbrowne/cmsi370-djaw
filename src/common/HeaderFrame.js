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
    fontSize: 16,
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
  },

  menuItem: {
    justifyContent:"left",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 27,
    borderRadius: 0,
  },

  menuIcon: {
    marginRight: 30, 
    color:"#000000"
  }, 

  menuText: {
    textTransform:"none", 
    color: "#292F36", 
    fontFamily:"Avenir",
    fontSize: 18,
  },

  popoverTitle:{
    fontSize: 22, 
    fontFamily:"Arial",
    alignSelf:"center",
    color: "#CFCFCF",
    paddingTop: 18, 
    paddingBottom: 18, 
  },

  signOut:{
    display:"flex",
    justifyContent:"center", 
    alignItems:"center",
    marginTop: 0, 
    marginBottom: 5,
  },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null)

    const handleAvatarClick = event => {
        setAnchor(event.currentTarget) // visually anchor the popup to the button
    }

    const handleAvatarClose = () => setAnchor(null)

    const routeToSettings  = () => {
        window.open("/Settings", "_self");
        console.log("SETTINGS")
    }

    const routeToLogIn  = () => {
        window.open("/Login", "_self");
        console.log("SETTINGS")
    }

    const routeToCustomize  = () => {
        window.open("/Customize", "_self");
        console.log("CUSTOMIZE")
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Avatar src={logo} style = {{marginRight: 10, }}/>
                    <Link to="/" className={classes.title}>
                        Relab
                    </Link>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleAvatarClick}>
                        <MenuIcon size="large"/>
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
                            <Typography className={classes.popoverTitle}>My Account</Typography>
                            <Button onClick={routeToSettings} className={classes.menuItem} disableTouchRipple>
                                <SettingsIcon className={classes.menuIcon}/>
                                <Typography className={classes.menuText}>Settings</Typography>
                            </Button>
                            <Button onClick={routeToCustomize} className={classes.menuItem} disableTouchRipple>
                                <TuneIcon className={classes.menuIcon}/>
                                <Typography className={classes.menuText}>Customize Avatar</Typography>
                            </Button>
                            <Divider style={{marginTop: 20, marginBottom: 20, }}/>
                            <div className={classes.signOut}>
                                <Button style={{color:"#FF5B5B"}} onClick={routeToLogIn}>
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    </Popover>
                </Toolbar>
            </AppBar>
        </div>
    );
}