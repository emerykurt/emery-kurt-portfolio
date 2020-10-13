import React from 'react'
import ReactPlayer from 'react-player';
import video from './Wedding/media/styledShoot.mp4'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  }));

export default function Video() {
    const classes = useStyles();

    return (
        <Card
        align='center' 
        className={classes.root} 
        style={{ background: 'rgb(255,255,255, 0.15)', boxShadow: '0 0 15px 15px rgb(255,255,255, 0.15)'}}>
            <div className={classes.details}>
                <CardContent className={classes.content} >
                <Typography component="h5" variant="h5" >
                    Artistry Featured
                </Typography>
                <Typography variant="subtitle1" >
                    The Carlyle | Atlanta
                </Typography>
                </CardContent>
            </div>
            <CardMedia>
            <ReactPlayer playing url={video} controls volume loop />
            </CardMedia>
        </Card>
    )
}
