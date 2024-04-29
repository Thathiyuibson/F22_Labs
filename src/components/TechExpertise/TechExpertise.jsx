import React from 'react'
import { ourTechExpertise } from './data';
import './TechExpertise.scss';

const TechExpertise = () => {
  return (
    <div>
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
        <button className='center-btn'>See All</button>
      </div>
    </div>
  );
};

export default TechExpertise
