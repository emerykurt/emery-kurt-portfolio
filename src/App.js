import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavBar/NavBar';
import LandingPage from './Landing/LandingPage';
import Tech from './Tech/Tech';
import Makeup from './Makeup/Makeup';
import Blog from './Blog/Blog';
import Podcast from './Podcast/Podcast';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Router>
      <Container 
        style={{ 
          background: 'rgb(187,188,189, 0.6)', 
          boxShadow: '0 0 15px 15px rgb(187,188,189, 0.6)'}}>
      <Nav /><br/>
      <Switch>
        <Route exact path='/'><LandingPage /></Route>
        <Route exact path='/tech'><Tech/></Route>
        <Route exact path='/makeup'><Makeup/></Route>
        <Route exact path='/blog'><Blog/></Route>
        <Route exact path='/podcast'><Podcast/></Route>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
