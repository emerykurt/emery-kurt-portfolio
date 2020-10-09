import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavBar/NavBar';
import LandingPage from './LandingPage';
import AboutMe from './About/AboutMe';
import Tech from './Tech/Tech';
import Makeup from './Makeup/Makeup';
import Blog from './Blog/Blog';
import Podcast from './Podcast/Podcast'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'><LandingPage/></Route>
        <Route exact path='/about-me'><AboutMe/></Route>
        <Route exact path='/tech'><Tech/></Route>
        <Route exact path='/makeup'><Makeup/></Route>
        <Route exact path='/blog'><Blog/></Route>
        <Route exact path='/podcast'><Podcast/></Route>
      </Switch>
    </Router>
  );
}

export default App;
