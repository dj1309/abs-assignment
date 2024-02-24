import React from 'react';
import Ratio from 'react-bootstrap/Ratio';
import exampleVideo from './video.mp4'; // Import the video file
import './videocomponent.css'
const VideoComponent = () => {
  return (
    <div className='dj'>
    <div className='mainvideo'>
    <Ratio >
        <video autoPlay loop muted playsInline>
          <source src={exampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Ratio>
    </div>
    <div className='main'>
     Built by Developers,for Developers,With fair terms for all,Lets build things together
    </div>
    </div>
  );
};

export default VideoComponent;
