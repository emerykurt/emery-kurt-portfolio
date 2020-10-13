import React from 'react';
import Video from './Video'
import Wedding from './Wedding/photoreel'
import Sky from './SkyPhotoshoot/photoreel'
import Carter from './CarterPhotoshoot/photoreel'

export default function Makeup() {
    return (
        <div >
            <Video/>
            <br/><br/><br/><br/><br/><br/>
            <Wedding />
            <br/><br/><br/>
            <Sky/>
            <br/><br/><br/>
            <Carter/>
            <br/><br/><br/>
        </div>
    )
}