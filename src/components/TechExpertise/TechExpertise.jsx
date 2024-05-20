import React from 'react'
import { ourTechExpertise } from './data';
import './TechExpertise.scss';

const TechExpertise = () => {
  return (
    <div className='tech-expertise'>
      <h1 className='heading3'>Our Tech Expertise</h1>
      <div className='domain-grids'>
        {ourTechExpertise.map(domain => (
            <div className='domains-item' key={domain.id}>
                <img src={domain.img} alt='domainimg' />
            </div>
        ))}
        <div className='more'>
            <div className='middle-div'>
                <div className='plus'>+ </div>
                more
            </div>
        </div>
        <div className='center-btn'>
        <button>See All</button>
        </div>
      </div>
    </div>
  );
};

export default TechExpertise
