import React from 'react';
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
    flexWrap: 'wrap',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ background: 'rgb(255,255,255, 0.5)', boxShadow: '0 0 15px 15px rgb(255,255,255, 0.5)'}}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            BlackIn ATL
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Ruby on Rails 
          </Typography>
          <Typography className={classes.details} variant="p" style={{ width: '500px'}} fontWeight="fontWeightMedium">
            BlackIn Atl is a directory for all black owned restaurants in Atlanta. The app will give not only the restaurant's info, but link you to the owner's info.  
          </Typography><br/><br/>
          <CardMedia className={classes.cover}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XQedyWHkFCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='Rails Project'/>
          </CardMedia>
          <IconButton onClick={ () => { window.open('https://github.com/emerykurt/blackinatlapp', '_blank') }}>
            <GitHubIcon />
          </IconButton>
        </CardContent>
    </Card>
  );
}