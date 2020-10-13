import React from 'react';
import Card from '@material-ui/core/Card';
import './Card.css';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function MediaControlCard() {

  return (
    <Card  
    style={{ background: 'rgb(255,255,255, 0.16)', 
    boxShadow: '0 0 15px 15px rgb(255,255,255, 0.16)'}}>
        <CardContent  >
          <Typography  variant="h5">
            Tech Tribe 
          </Typography>
          <Typography variant="subtitle2">
            React/Redux with Rails API & Material UI
          </Typography>
          <Typography fontWeight="fontWeightMedium">
            Tech Tribe is a React/Redux app that utilizes Material UI for styling. The inspiration comes from graduating FlatIron School and creating a network space for those graduating or alumni.
          </Typography><br/><br/>
          <div class='video-container'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ZTHB4hdLxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='React Project'/>
          </div><br/>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/tech-tribe', '_blank') }}>
            <GitHubIcon />
          </IconButton>
      </CardContent>
    </Card>
  );
}