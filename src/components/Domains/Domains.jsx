import React from 'react';
import { domainsWorked } from './Data';
import './Domains.scss';

const Domains = () => {
  return (
    <div className='domains'>
      <h1 className='headings'>Domains we've worked on</h1>
      <div className='domains-grid'>
        {domainsWorked.map(domain => (
          <div className='domain-item' key={domain.id}>
            <img src={domain.img} alt={domain.text} />
            <p className='text'>{domain.text}</p>
          </div>
        ))}
        <div className="center-button">
          <button className='get-in-touch'>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Domains;



