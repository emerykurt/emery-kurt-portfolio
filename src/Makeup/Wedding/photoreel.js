import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import i1 from './media/i1.jpg'
import i2 from './media/i2.jpg'
import i3 from './media/i3.jpg'
import i4 from './media/i4.jpg'


const imgArr = [

    i1,
    i2,
    i3,
    i4
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineGridList() {
  const classes = useStyles();
    // debugger
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} >
        {imgArr.map((tile) => (
          <GridListTile key={tile} style={{ background: 'rgb(255,255,255, 0.65)', height: '500px'}}>
            <img src={tile} alt="wedding" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}