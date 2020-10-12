import React from 'react';
import ReactPlayer from 'react-player';
import video from './Wedding/media/styledShoot.mp4'

export default function Makeup() {
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <br/><br/>
            <ReactPlayer align= 'center' playing url={video} />
        </div>
    )
}
// https://youtu.be/7gimJVxNs1M