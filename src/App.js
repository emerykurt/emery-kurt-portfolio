import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavBar/NavLinks';
import LandingPage from './Landing/LandingPage';
import Tech from './Tech/Tech';
import Makeup from './Makeup/Makeup';
import Blog from './Blog/Blog';
import Podcast from './Podcast/Podcast';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    // debugger
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

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
}

function App(props) {
  return (
    <Router>
      <Container 
        style={{ 
          background: 'rgb(187,188,189, 0.6)', 
          boxShadow: '0 0 15px 15px rgb(187,188,189, 0.6)'}}>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Nav /><br/>
      <Switch>
        <Route exact path='/'><LandingPage /></Route>
        <Route exact path='/tech'><Tech/></Route>
        <Route exact path='/makeup'><Makeup/></Route>
        <Route exact path='/blog'><Blog/></Route>
        <Route exact path='/podcast'><Podcast/></Route>
      </Switch>
      <ScrollTop {...props}>
        <Fab style={{ background:'linear-gradient(to bottom, #8D9B6A 0%, #bbbcbd 100%'}}  size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </Container>
    </Router>
  );
}

export default App;
