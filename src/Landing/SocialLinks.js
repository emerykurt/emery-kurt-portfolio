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

const clickEvent = (input) => {
    switch (input.currentTarget.innerText) {
        case "Github":
            console.log("Github")
            window.open('https://github.com/emerykurt', '_blank')
            break;
        case "Twitter":
            console.log("Twitter")
            window.open('https://twitter.com/iLaugh_iLearn', '_blank')
            break;
        case "LinkedIn":
            console.log("LinkedIn")
            window.open('https://www.linkedin.com/in/emery-lumsden-ii-5b5b98b9/', '_blank')
        break;
    
        default:
            break;
    }
}

export default function SocialLinks() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        clickEvent(event)
      }}
      showLabels
      style={{ background: 'rgb(255,255,255, 0.65)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.65)'}}
      className={classes.root}
    >
      <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
      <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
      <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
    </BottomNavigation>
  );
}