// import React from 'react'
// import {Link} from 'react-router-dom';
// import './Navbar.scss'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className='wrapper'>
//       <div className='left'>
//         <div className='logo'>
//           <Link to={'/'}>
//           <img src='https://www.f22labs.com/_next/static/media/logo.cab716e3.svg' alt='logo' />
//           </Link>
//         </div>
//       </div>
//       <div className='center'>
//         <div className='item'>
//           <Link className='link'>About</Link>
//         </div>
//         <div className='item'>
//           <Link className='link'>Service</Link>
//         </div>
//         <div className='item'>
//           <Link className='link'>Work</Link>
//         </div>
//         <div className='item'>
//           <Link className='link' to= '/careers'>Careers</Link>
//         </div>
//         <div className='item'>
//           <Link className='link'>WallofLove</Link>
//         </div>
//         <div className='item'>
//           <Link className='link' to='/allblogs'>Blog</Link>
//         </div>
//       </div>
//       <div className='right'>
//         <button className='btn'>Contact Us</button>
//       </div>
//       </div>
//     </div>
//   )
// }
// export default Navbar





// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import './Navbar.scss'

// class Navbar extends Component {
//   state = {clicked : false};
//   handleClick = () => {
//     this.setState({clicked: !this.state.clicked})
//   }
//   render(){
//   return (
//     <div>
//     <nav>
//       <a href='http://localhost:5173/'>
//       <img src='https://www.f22labs.com/_next/static/media/logo.cab716e3.svg' alt='logo' />
//       </a>

//       <div>
//         <ul id='navbar' className= {this.state.clicked ? "#navbar active" : "navbar"}>
//           <li><a className='active' href='http://localhost:5173/'>About</a></li>
//           <li><a href='http://localhost:5173/'>Service</a></li>
//           <li><a href='http://localhost:5173/'>Work</a></li>
//           <li><a href='http://localhost:5173/careers'>Careers</a></li>
//           <li><a href='http://localhost:5173/'>Wall of Love</a></li>
//           <li><a href='http://localhost:5173/allblogs'>Blog</a></li>
//         </ul>
//       </div>
//       <div className='contact-btn'>
//         <button>Contact Us</button>
//       </div>
//       <div id='mobile' onClick={this.handleClick}>
//         <i id='bar' className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
//         </i>
//       </div>
//     </nav>
//     </div>
//   );
// }
// }


// export default Navbar


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>
            <img src='https://www.f22labs.com/_next/static/media/logo.cab716e3.svg' alt='logo' />
          </Link>

          <div>
            <ul className='navbar'>
              <li><Link to='/' className='active'>About</Link></li>
              <li><Link to='/'>Service</Link></li>
              <li><Link to='/'>Work</Link></li>
              <li><Link to='/careers'>Careers</Link></li>
              <li><Link to='/'>Wall of Love</Link></li>
              <li><Link to='/allblogs'>Blog</Link></li>
            </ul>
          </div>
          <div className='contact-btn'>
            <button>Contact Us</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;









