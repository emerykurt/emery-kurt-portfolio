import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';



export default function SocialLinks() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ background: 'rgb(255,255,255, 0.2)', boxShadow: '0 0 15px 15px rgb(255,255,255, 0.2)'}}
    >
      <BottomNavigationAction 
      onClick={ () => { window.open('https://www.linkedin.com/in/emery-lumsden-ii-5b5b98b9/', '_blank') }} label="LinkedIn" icon={<LinkedInIcon />} />
      <BottomNavigationAction 
      onClick={ () => { window.open('https://github.com/emerykurt', '_blank') }}label="Github" icon={<GitHubIcon />} />
      <BottomNavigationAction 
      onClick={ () => { window.open('https://twitter.com/iLaugh_iLearn', '_blank') }}
      label="Twitter" icon={<TwitterIcon />} />
    </BottomNavigation>
  );
}