import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';


export default function NavLinks() {
  return (
    <Breadcrumbs 
    maxItems={2} 
    aria-label="breadcrumb" 
    style={{ background: 'rgb(146, 148, 148, 0.7)'}}>
      <NavLink to='/' color="inherit" href="#">
        Home
      </NavLink>
      <NavLink to='/tech' color="inherit" href="#">
        Tech Gallery
      </NavLink>
      <NavLink to='/makeup' color="inherit" href="#">
        Makeup Gallery
      </NavLink>
      <NavLink to='/blog' color="inherit" href="#">
        Blog Gallery
      </NavLink>
      <NavLink to='/podcast' color="inherit" href="#">
        Podcast
      </NavLink>
      <Typography color="textPrimary">Galleries</Typography>
    </Breadcrumbs>
  );
}


