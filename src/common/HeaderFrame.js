import { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import logo from "../assets/images/logo.png";

import { 
  AppBar, 
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Popover,
  Avatar,
  Divider
  
} from '@material-ui/core'

import {
  Link
} from "react-router-dom";

import SettingsIcon from '@material-ui/icons/Settings';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles((theme) => ({
  root: {
  },

  menuButton: {
    marginLeft: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    color:'#ffdf4f',
    fontWeight:"bold",
    textDecoration:"none",
    fontSize: 25,
  },

  popoverPaper: {
    minWidth: 275,
    maxWidth: 275,
    paddingTop: 15,
    paddingBottom: 15,
    // backgroundColor: '#ffdf4f',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: 0,
  },

  popoverMenu: {
    flex: 1, 
    display:"flex",
    // backgroundColor: '#ffdf4f',
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
    fontFamily:"Roboto",
    fontSize: 18,
  },

  popoverTitle:{
    fontSize: 20, 
    fontFamily:"Roboto",
    fontWeight:"Bold",
    alignSelf:"center",
    color: "#000000",
    paddingTop: 8, 
    paddingBottom: 8, 
  },

  signOut:{
    display:"flex",
    justifyContent:"center", 
    alignItems:"center",
    marginTop: 0, 
    marginBottom: 5,
  },

  profileName:{
    display: "flex",
    alignSelf: "right",
    color: "#000000",
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
                    {/* <Typography className={classes.profileName}>John Doe</Typography> */}
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
                            <Typography className={classes.popoverTitle}>John Doe</Typography>
                            <Button onClick={routeToCustomize} className={classes.menuItem} disableTouchRipple>
                                <TuneIcon className={classes.menuIcon}/>
                                <Typography className={classes.menuText}>Customize Avatar</Typography>
                            </Button>
                            <Button onClick={routeToSettings} className={classes.menuItem} disableTouchRipple>
                              <SettingsIcon className={classes.menuIcon} />
                              <Typography className={classes.menuText}>Settings</Typography>
                            </Button>
                            <Divider style={{marginTop: 20, marginBottom: 20, }}/>
                            <div className={classes.signOut}>
                                <Button 
                                // disableTouchRipple
                                style={{
                                  color: "#FFFFFF",
                                  // color:"#FF5B5B", 
                                  // backgroundColor: "rgba(255,0,0,0.1)", 
                                  backgroundColor: "#FF5B5B",
                                  borderRadius: 0, 
                                  paddingLeft: 30, 
                                  paddingRight: 30
                                }} 
                                onClick={routeToLogIn}
                                >
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