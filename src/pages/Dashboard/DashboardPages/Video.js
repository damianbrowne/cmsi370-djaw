import React from 'react';

import {
    Button,
    makeStyles,
    Modal,
    Backdrop,
    Fade,
    Paper,
    Typography
} from '@material-ui/core'

import { useParams } from 'react-router'


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"green",
    },
    modalPaper: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }

}),{ name: 'Video' });

export default function Video() {
  const classes = useStyles();

  const [openVideo, setVideoOpen] = React.useState(false);

  let { id } = useParams()

  const handleOpen = () => {
    setVideoOpen(true);
  };

  const handleClose = () => {
    setVideoOpen(false);
  };

  return (
    <div className={classes.root}>

        <Button onClick={handleOpen}>
            VIDEO
        </Button>
        <Modal
            className={classes.modalPaper}
            open={openVideo}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openVideo}>
                <Paper >
                    <Typography >
                        HELLO
                    </Typography>
                </Paper>
            </Fade>
        </Modal>
    </div>
  );
}