import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
            Company Click 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            JavaScript ES6 with Rails API
          </Typography><br/>
          <Typography align= 'center' style={{fontSize: '15px'}} fontWeight="fontWeightMedium">
            Company Click repository is a complication of an API and Frontend put together. The frontend was created with JavaScript ES6. The backend was created with Ruby on Rails The bootstrap template is provided by <a href="http://templated.co">Templated</a>. The template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license.
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/companyclick', '_blank') }}>
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia>
      <ReactPlayer url='https://www.youtube.com/watch?v=XQedyWHkFCY' />
      </CardMedia>
    </Card>
  );
}