import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'wrap',
    padding: '10px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function NavLinks() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Breadcrumbs aria-label="breadcrumb">
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
    </Breadcrumbs>
    </div>
  );
}


