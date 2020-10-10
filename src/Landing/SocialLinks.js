import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    width: 500,
    
  },
});


export default function SocialLinks() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ background: 'rgb(255,255,255, 0.65)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.65)'}}
      className={classes.root}
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