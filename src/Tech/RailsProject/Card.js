import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

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

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ background: 'rgb(255,255,255, 0.85)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.65)'}}>
      <div className={classes.details}>
        <CardContent className={classes.content} style={{width: '300px'}}>
          <Typography component="h5" variant="h5">
            BlackIn ATL
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Ruby on Rails 
          </Typography><br/><br/><br/>
          <Typography align= 'center' style={{fontSize: '15px'}} fontWeight="fontWeightMedium">
            BlackIn Atl is a directory for all black owned restaurants in Atlanta. The app will give not only the restaurant's info, but link you to the owner's info.  
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={ () => { window.open('https://github.com/emerykurt/blackinatlapp', '_blank') }}>
            <GitHubIcon />
          </IconButton>
          
        </div>
      </div>
      <CardMedia>
      <ReactPlayer url='https://www.youtube.com/watch?v=gXZUzUrlEv8&t=5s' />
      </CardMedia>
    </Card>
  );
}