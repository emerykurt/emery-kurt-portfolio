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
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

export default function Video() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ background: 'rgb(255,255,255, 0.35)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.35)'}}>
            <div className={classes.details}>
                <CardContent className={classes.content} style={{ background: 'rgb(255,255,255, 0.2)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.2)'}}>
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
