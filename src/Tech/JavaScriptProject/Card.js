import React from 'react';
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
            Company Click 
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            JavaScript ES6 with Rails API
          </Typography>
          <Typography className={classes.details} style={{ width: '500px'}} variant="p" fontWeight="fontWeightMedium">
            Company Click repository is a complication of an API and Frontend put together. The frontend was created with JavaScript ES6. The backend was created with Ruby on Rails The bootstrap template is provided by <a href="http://templated.co">Templated</a>. The template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license.
          </Typography><br/><br/>
          <CardMedia >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fIenuzVe_M4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='JavaScript Project'/>
          </CardMedia>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/companyclick', '_blank') }}>
            <GitHubIcon />
          </IconButton>
      
      </CardContent>
    </Card>
  );
}