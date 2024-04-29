import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className='left'>
        <div className='logo'>
          <Link to={'/'}>
          <img src='https://www.f22labs.com/_next/static/media/logo.cab716e3.svg' alt='logo' />
          </Link>
        </div>
      </div>
      <div className='center'>
        <div className='item'>
          <Link className='link'>About</Link>
        </div>
        <div className='item'>
          <Link className='link'>Service</Link>
        </div>
        <div className='item'>
          <Link className='link'>Work</Link>
        </div>
        <div className='item'>
          <Link className='link' to= '/careers'>Careers</Link>
        </div>
        <div className='item'>
          <Link className='link'>WallofLove</Link>
        </div>
        <div className='item'>
          <Link className='link' to='/allblogs'>Blog</Link>
        </div>
      </div>
      <div className='right'>
        <button className='btn'>Contact Us</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
