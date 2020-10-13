import React from 'react';
import Card from '@material-ui/core/Card';
import './Card.css';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function MediaControlCard() {

  return (
    <Card style={{ background: 'rgb(255,255,255, 0.16)', 
    boxShadow: '0 0 15px 15px rgb(255,255,255, 0.16)'}}>
        <CardContent >
          <Typography variant="h5">
            BlackIn ATL
          </Typography>
          <Typography variant="subtitle2" >
            Ruby on Rails 
          </Typography>
          <Typography fontWeight="fontWeightMedium">
            BlackIn Atl is a directory for all black owned restaurants in Atlanta. The app will give not only the restaurant's info, but link you to the owner's info.  
          </Typography><br/><br/>
          <div class='video-container'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XQedyWHkFCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='Rails Project'/>
          </div><br/>
          <IconButton onClick={ () => { window.open('https://github.com/emerykurt/blackinatlapp', '_blank') }}>
            <GitHubIcon />
          </IconButton>
        </CardContent>
    </Card>
  );
}