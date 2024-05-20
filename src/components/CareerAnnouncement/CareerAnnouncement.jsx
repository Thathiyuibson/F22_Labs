import React from 'react';
import './CareerAnnouncement.scss';
import { Link } from 'react-router-dom';

const CareerAnnouncement = () => {
  return (
    <div className='career-announcement'>
      <div className='logo-container'>
        <Link to={'/'}>
        <img className='logo' src='https://f22labs.zohorecruit.in/recruit/viewCareerImage.do?page_id=65449000000346512&type=logo&file_name=F22logo__1_.png' alt='Logo' />
        </Link>
        <nav className='menu'>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/services'>SERVICES</Link></li>
            <li><Link to='/work'>WORK</Link></li>
            <li><Link to='/walloflove'>WALL OF LOVE</Link></li>
            <li><Link to='/allblogs'>BLOG</Link></li>
          </ul>
        </nav>
      </div>
      <div className='career-background'>
        <img src='https://www.f22labs.com/_next/image/?url=%2Fimages%2Fhero-section%2Fbg.png&w=1200&q=20' alt='' />
      </div>
      <div className='inside-txt'>
        <h1>We’re Hiring ̶N̶i̶n̶j̶a̶s̶ Humans</h1>
        <h2>Only for serious folks. Work that challenges, excites, scares you and lets you go to bed satisfied!</h2>
      </div>
      <div className='opening-btn'>
        <button>View Openings</button>
      </div>
    </div>
  );
};

export default CareerAnnouncement;

