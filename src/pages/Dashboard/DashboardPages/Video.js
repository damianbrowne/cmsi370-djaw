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

import Iframe from 'react-iframe'

const useStyles = makeStyles(() => ({
    root: {
        display:"flex",
        flexDirection:"column",
        marginBottom: 75,
        marginRight: 50,
        alignItems:"center",
        borderRadius: 0,
        minWidth: 400, 
        maxWidth: 400,
        backgroundColor:'transparent'
    },

    cardRoot: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius: 0,
        minWidth: 300, 
        maxWidth: 400,
        minHeight: 300,
        maxHeight: 400,
        marginBottom: 10,
        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
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
        paddingTop: 8, 
        paddingBottom: 10,
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
    },

    video: {
        minWidth: 800, 
        maxWidth: 800,
        minHeight: 650,
        maxHeight: 650,
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
    },

    videoContent: {
        minWidth: 800,
        maxWidth: 800,
        minHeight: 600, 
    },

    progress: {
        width: "100%",
        borderRadius: 0,
        // boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.2)',
        minHeight: 50, 
        maxHeight: 50, 
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'transparent'
    },

    progressBar: {
        backgroundColor: '#d8d8d8',
        borderRadius: 10,
        position: 'relative',
        margin: '15px 0',
        height: '30px',
        width: '100%',
        fontWeight:"bold"
    },

    progressBarDone: {
        background: 'linear-gradient(to left, #54C981, #5EB1FF)',
        boxShadow: '0 0 1px 0 #54C981, 0 0 1px 0 #5EB1FF',
        borderRadius: 10,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 0,
        opacity: 0,
        transition:'1s ease 0.3s',
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

  const ProgressBar = ({done}) => {
	const [style, setStyle] = React.useState({});
    const classes = useStyles(props);
    
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className={classes.progressBar}>
			<div className={classes.progressBarDone} style={style}>
				{done}%
			</div>
		</div>
	)
  }

  return (
    <div >
        <div className={classes.root}>
            <Card className={classes.cardRoot} elevation={0} onClick={handleOpen}>
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
            <div className={classes.progress} elevation={0}>
                <ProgressBar done={Math.floor(Math.random() * Math.floor(100))}/>
            </div>
        </div>


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
                <Paper className={classes.video}>
                    <Typography className={classes.title} style={{marginTop: 12, }}>{props.title}</Typography>
                    <Iframe 
                        url={props.link}
                        id={props.title}
                        className={classes.videoContent}
                        display="initial"
                        position="relative"
                        allowFullScreen
                    />
                </Paper>
            </Fade>
        </Modal>
    </div>
  );
}

export default Video;