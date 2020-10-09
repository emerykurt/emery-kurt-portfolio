import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from './SocialLinks'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br/><br/><br/><br/><br/>
            <Typography variant= 'h1'>Welcome</Typography><br/><br/>
            <Typography align="center" style={{fontSize: '23px'}}>
              Hey! My name is <em style={{fontSize: '36px'}} >Emery Kurt</em> . I am a Miami native that migrated to Atlanta. Life has taken me on some journeys and I am proud to be a <strong><em style={{fontSize: '30px'}}>Makeup Artist</em></strong> and <strong><em style={{fontSize: '30px'}}>Software Engineer</em></strong>. 
            </Typography>
            <br/><br/>
            <SocialLinks align= 'center'/>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

