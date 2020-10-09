import React from 'react';
import NavLinks from './NavLinks';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };


export default function NavBar() {
    return (
        <React.Fragment >
            <CssBaseline />
            <Toolbar id="back-to-top-anchor"  style={{ background: 'rgb(255,255,255, 0.65)', boxShadow: '0 0 5px 5px rgb(255,255,255, 0.65)'}}>
              <NavLinks  />
            </Toolbar>
            <ScrollTop>
            <Fab style={{ background: 'linear-gradient(to bottom, #808080 0%, #bbbcbd 100%'}}  size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}
