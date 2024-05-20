import React from 'react';
import './Announcement.scss';

const Announcement = () => {
  return (
    <div className='announcement'>
        <div className='background'>
            <img src='https://www.f22labs.com/_next/image/?url=%2Fimages%2Fhero-section%2Fbg.png&w=1200&q=20' alt='' />
        </div>
        <div className='innertext'>
            <h1 className='centered-text'>IDEATE . DESIGN . BUILD . LAUNCH</h1>
            <h1 className='centered-text'>We Build Web and Mobile Applications</h1>
            <h1 className='centered-text'>Have an idea in mind?</h1>
        </div>
        <div className='lets-chat'>
            <button className='lets-chat-btn'>Let's Chat</button>
        </div>
    </div>
  );
};

export default Announcement;
