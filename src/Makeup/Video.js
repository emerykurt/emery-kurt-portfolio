import React from 'react'
import ReactPlayer from 'react-player';
import video from './Wedding/media/styledShoot.mp4'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Video() {

    return (
        <Card
        align='center' 
        style={{ background: 'rgb(255,255,255, 0.15)', boxShadow: '0 0 15px 15px rgb(255,255,255, 0.15)'}}>
        <CardContent alignItems='center' >
        <Typography variant="h5" >
            Featured Artistry
        </Typography>
        <Typography variant="subtitle1" >
            The Carlyle | Atlanta
        </Typography><br/>
        <CardMedia>
        <ReactPlayer height='auto' playing url={video} controls volume loop />
        </CardMedia>
        </CardContent>
        </Card>
    )
}
