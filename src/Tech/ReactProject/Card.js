import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
            Tech Tribe 
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            React/Redux with Rails API & Material UI
          </Typography><br/><br/><br/>
          <Typography align= 'center' style={{fontSize: '15px'}} fontWeight="fontWeightMedium">
            Tech Tribe is a React/Redux app that utilizes Material UI for styling. The inspiration comes from graduating FlatIron School and creating a network space for those graduating or alumni.
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/tech-tribe', '_blank') }}>
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
      <ReactPlayer url='https://www.youtube.com/watch?v=6ZTHB4hdLxw&t=92s' />
    </Card>
  );
}