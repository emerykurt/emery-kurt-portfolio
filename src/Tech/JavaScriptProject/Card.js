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
            Company Click 
          </Typography>
          <Typography variant="subtitle2" >
            JavaScript ES6 with Rails API
          </Typography>
          <Typography fontWeight="fontWeightMedium">
            Company Click is a compilation of an API and Frontend put together. The frontend was created with JavaScript ES6. The backend was created with Ruby on Rails. The bootstrap template is provided by <a href="http://templated.co">Templated</a>. The template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license.
          </Typography><br/><br/>
          <div class='video-container'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fIenuzVe_M4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='JavaScript Project'/>
          </div><br/>
          <IconButton 
          onClick={ () => { window.open('https://github.com/emerykurt/companyclick', '_blank') }}>
            <GitHubIcon />
          </IconButton>
      
      </CardContent>
    </Card>
  );
}