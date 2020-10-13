import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SocialLinks from './SocialLinks';


export default function LandingPage() {

    return (
        <div align='center'>
            <br/><br/><br/><br/>
            <Container maxWidth="sm" style={{ background: 'rgb(187,188,189, 0)', boxShadow: '0 0 15px 15px rgb(187,188,189, 0)'}}>
            <br/><br/>
            <Typography variant= 'h1'>Welcome</Typography><br/><br/><br/>
            <Typography variant="p" style={{ fontSize: '21px'}} fontWeight="fontWeightMedium">
              Hey! My name is <em style={{fontSize: '36px'}} >Emery Kurt</em> . I am a Miami native that migrated to Atlanta. Life has taken me on some journeys and I am proud to be a <strong><em style={{fontSize: '30px'}}>Makeup Artist</em></strong> and <strong><em style={{fontSize: '30px'}}>Software Engineer</em></strong>. 
            </Typography>
            <br/><br/><br/><br/>
            <SocialLinks />
            </Container>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}