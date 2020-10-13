import React from 'react'
import Typography from '@material-ui/core/Typography'
import ReactContainer from './ReactProject/ReactContainer'
import RailsContainer from './RailsProject/RailsContainer'
import JavaScriptContainer from './JavaScriptProject/JavaScriptContainer'

export default function Tech() {
    return (
        <div align='center'>
            <br/><br/>
            <Typography style={{fontSize: '40px'}}>Tech Gallery</Typography>
            <br/><br/><br/><br/>
            <ReactContainer /><br/><br/><hr/><br/><br/>
            <JavaScriptContainer/><br/><br/><hr/><br/><br/>
            <RailsContainer/><br/><br/><br/><br/>
        </div>
    )
}
