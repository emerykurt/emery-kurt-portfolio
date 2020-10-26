import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SocialLinks from './SocialLinks';
import pdf from  '../Images/FlatIronCertificate.pdf'
import './Landing.css'


export default function LandingPage() {

    return (
        <div align='center'>
            <br/><br/>
            <Container maxWidth="md" style={{ background: 'rgb(187,188,189, 0)', boxShadow: '0 0 15px 15px rgb(187,188,189, 0)'}}>
            <Typography variant= 'h2'>Welcome!</Typography><br/><br/><br/>
            <Typography variant="body1" style={{ fontSize: '21px'}} fontWeight="fontWeightMedium">
              Hey! My name is <em style={{fontSize: '36px'}} >Emery Kurt</em>. I am a Miami native that migrated to Atlanta. Life has taken me on some journeys and I am proud to be a <strong><em style={{fontSize: '30px'}}>Makeup Artist</em></strong> and <strong><em style={{fontSize: '30px'}}>Software Engineer</em></strong>. My proficiencies include developing <strong>web applications, relational database design, & software programming</strong>. Detailed areas of interest include web development, application development, API development, and mobile development. My knowledge includes <strong><em style={{fontSize: '22px'}}> JavaScript, React, Redux, HTML5, and CSS </em></strong> on the Front-end; and <strong><em style={{fontSize: '22px'}}> Ruby and SQL </em></strong> on the Back-end. 
            </Typography>
            <br/><br/><br/><br/>
            <Typography variant='h4'>
                Most Recent Education:
            </Typography><br/><br/>
            <div class="container"> 
            <iframe class="responsive-iframe" align='center' width="560" height="315" src={pdf + "#toolbar=0"} title='Certification'/>
            </div>
            <br/><br/><br/><br/>
            <SocialLinks />
            </Container>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}