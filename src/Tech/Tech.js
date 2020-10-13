import React from 'react'
import Typography from '@material-ui/core/Typography'
import ReactContainer from './ReactProject/Card'
import RailsContainer from './RailsProject/Card'
import JavaScriptContainer from './JavaScriptProject/Card'

export default function Tech() {
    return (
        <div align='center'>
            <br/><br/>
            <Typography variant= 'h2'>Tech Gallery</Typography>
            <br/><br/><br/><br/>
            <ReactContainer /><br/><br/><hr/><br/><br/>
            <JavaScriptContainer/><br/><br/><hr/><br/><br/>
            <RailsContainer/><br/><br/><br/><br/>
        </div>
    )
}
