import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='footer'>
    <div className='containor1'>
      <div className='top'>
        <div className='logo'>
        <img src='https://www.f22labs.com/images/f22footer/F22logo.svg' alt='logo' />
        <p>
        A Software studio based out of Chennai. We are the rocket fuel for other startups across the world,
        powering them with extremely high-quality software.
        We help entrepreneurs build their vision into beautiful software products (web/mobile)
        </p>
        </div>
        <div className='item'>
          <h1>Company</h1>
          <span>About</span>
          <span>Team</span>
          <span>Work</span>
          <span>Careers</span>
          <span>AI Glossary</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
        <div className='item2'>
          <h1>Services</h1>
          <span>Planning & Roadmapping</span>
          <span>Design Support</span>
          <span>Product Development</span>
          <span>Growth & Awareness</span>
          <span>MVP Development</span>
          <span>Dedicated Development Team</span>
          <span>SaaS Developement Service</span>
          <span>Headless E-Commerce Development</span>
          <span>Hire Developers</span>
          <span>Headless Shopify Development</span>
          <span>Nearshore Development Services</span>
          <span>Outsourcing Software Development</span>
          <span>QA Software Testing Services</span>
        </div>
        <div className='locations'>
          <h1> Locations</h1>
          <h1>INDIA</h1>
          <span>The Executive Zone - Shakti Towers,
          Anna Salai, Thousand Lights,
          Chennai - 600002
          </span>
          <h1>USA</h1>
          <span>
          F22 Labs Inc,
          16192 Coastal,
          Highway Lewes 19958,
          Delaware
          </span>
          <div className='contacticons'>
          <h1>Follow Us On</h1>
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
          <XIcon />
          </div>

        </div>
      </div>
      <div className='bottom'>
        <div className='copyrights'>
          <span>
          © Copyright 2024, F22 Labs Global Private Limited. All rights reserved.
          </span>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
