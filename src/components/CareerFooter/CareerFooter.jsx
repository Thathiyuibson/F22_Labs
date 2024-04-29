import React from 'react';
import './CareerFooter.scss';
import { Link } from 'react-router-dom';

const CareerFooter = () => {
  return (
    <div className='main-footer'>
        <div className='top-footer'>
            <Link className='visit-link' to='/'>Visit website</Link>
        </div>
        <div className='bottom-footer'>
            <div>
                <p>Powered by</p>
            </div>
            <div>
                <img src='https://f22labs.zohorecruit.in/images/Recruit-logo-lockup.svg' alt='zoho logo' />
            </div>
        </div>
    </div>
  )
}

export default CareerFooter
