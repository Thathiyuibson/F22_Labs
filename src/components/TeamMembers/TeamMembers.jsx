import React from 'react';
import './TeamMembers.scss';

const TeamMembers = () => {
  return (
    <div style={{display: "flex", marginLeft:"20px"}}>
        <div className='container1'>
        <div>
            <h1 className='team'>Our Team is Your Team :)</h1>
        </div>
        <div className='desc1'>
            <p>
            We're a joyful nerdy team of designers, developers and adventure seekers.
            We approach our work with a curious spirit and experimentation, using what we learn to create engaging and useful products that are easy with people, 
            just like you. We are always on the lookout for amazing folks who can join and increase the value of our team.
            </p>
        </div>

        <div className="button-container">
            <button>Meet the Team</button>
            <button>View Openings</button>
        </div>
        </div>
        <div>
        <div className='bubbleimg-left'>
            <div className='bubbleimg1'></div>
            <div className='bubbleimg2'></div>
            <div className='bubbleimg3'></div>
            <div className='bubbleimg4'></div>
            <div className='bubbleimg5'></div>
        </div>
        <div className='bubbleimg-right'>
            <div className='bubbleimg6'></div>
            <div className='bubbleimg7'></div>
            <div className='bubbleimg8'></div>
            <div className='bubbleimg9'></div>
            <div className='bubbleimg10'></div>
        </div>
        </div>


    </div>
  );
}

export default TeamMembers;
