import React from 'react'
import Typography from '@material-ui/core/Typography'
import ReactContainer from './ReactProject/ReactContainer'
import RailsContainer from './RailsProject/RailsContainer'
import JavaScriptContainer from './JavaScriptProject/JavaScriptContainer'

export default function Tech() {
    return (
        <div >
            <br/><br/>
            <Typography variant= 'h2'>Tech Gallery</Typography>
            <br/><br/><br/><br/>
            <ReactContainer /><br/><br/><hr/><br/><br/>
            <JavaScriptContainer/><br/><br/><hr/><br/><br/>
            <RailsContainer/><br/><br/><br/><br/>
        </div>
    )
}
