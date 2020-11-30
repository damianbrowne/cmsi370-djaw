import React from 'react';

import {
    makeStyles,
    Modal,
    Backdrop,
    Fade,
    Paper,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:"column",
        marginBottom: 60,
        marginRight: 50,
        alignItems:"center",
        borderRadius: 0,
        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.2)'
    },

    modalPaper: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
    },

    mediaHolder: {
        justifyContent:"center",
        alignItems:"center",
    },

    media: {
        width: 500,
        height: 200,
        alignSelf:"center",
        justifySelf:"center"
    },

    title: {
        fontSize: 24,
        fontFamily: "Avenir",
        fontWeight:"bold",
        paddingTop: 10, 
        paddingBottom: 12,
    },

    content: {
        marginLeft: 25, 
        marginRight: 25,

    },

    description: {
        fontSize: 15, 
        fontWeight: "none",
        fontFamily:"Avenir",
        paddingBottom: 20,
        paddingTop: 12,
    }

}),{ name: 'Video' });

const Video = props => {
  const classes = useStyles(props);

  const [openVideo, setVideoOpen] = React.useState(false);

  const handleOpen = () => {
    setVideoOpen(true);
  };

  const handleClose = () => {
    setVideoOpen(false);
  };

  return (
    <div >
        <Card className={classes.root} elevation={0} onClick={handleOpen}>
            <CardActionArea disableTouchRipple>
                <div className={classes.mediaHolder}>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title={props.title}
                    />
                </div>
                <CardContent className={classes.content}>
                    <Typography className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography className={classes.description}>
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        {/* MODAL HERE */}
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
                        {props.title}
                    </Typography>
                </Paper>
            </Fade>
        </Modal>
    </div>
  );
}

export default Video;