import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
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
        <CardContent className={classes.content} >
          <Typography component="h5" variant="h5">
            Tech Tribe 
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            React/Redux with Rails API & Material UI
          </Typography>
          <Typography className={classes.details} variant="p" style={{ width: '500px'}} fontWeight="fontWeightMedium">
            Tech Tribe is a React/Redux app that utilizes Material UI for styling. The inspiration comes from graduating FlatIron School and creating a network space for those graduating or alumni.
          </Typography><br/><br/>
          <CardMedia>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZTHB4hdLxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='React Project'/>
          </CardMedia>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/tech-tribe', '_blank') }}>
            <GitHubIcon />
          </IconButton>
      </CardContent>
    </Card>
  );
}