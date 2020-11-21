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

const useStyles = makeStyles((theme) => ({
  root: {
  },

  menuButton: {
    marginLeft: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    color:"white",
    fontWeight:"bold"
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
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null)

  const handleAvatarClick = event => {
    setAnchor(event.currentTarget) // visually anchor the popup to the button
  }

  const handleAvatarClose = () => setAnchor(null)


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Relab
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleAvatarClick}>
            <MenuIcon />
          </IconButton>
          <Popover
            classes={{
              paper: classes.popoverPaper,
            }}
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
              <Button>
                FUNCTION 1
              </Button>
              <Button>
                FUNCTION 2
              </Button>
            </div>


          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
}