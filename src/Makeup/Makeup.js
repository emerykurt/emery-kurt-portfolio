import React from 'react';
import Video from './Video'
import WedShoot from './Wedding/Wedding'
import Sky from './SkyPhotoshoot/Sky'
import Carter from './CarterPhotoshoot/Carter'

export default function Makeup() {
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '20%',
            transform: 'translate(-50%, 0%)'
        }}>
            <br/><br/><br/>
            <Video/>
            <br/><br/><br/><br/><br/><br/>
            <WedShoot />
            <br/><br/><br/><br/><br/><br/>
            <Sky/>
            <br/><br/><br/><br/><br/><br/>
            <Carter/>
            <br/><br/><br/>
        </div>
    )
}