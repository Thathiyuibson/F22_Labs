import React from 'react';
import './FeaturedProducts.scss';

const FeaturedProducts = () => {
  return (
    <div className='lightblue-div'>
      <h1 className='heading2'>Featured Projects</h1>
      <img src='https://www.f22labs.com/_next/image/?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Ff22labs.com%2Fmobile%20frank%20darling.png&w=384&q=75' alt='mobile pic' />
      <div className='blue-div'>
        <div className='imgheading'>
          <img  className='headingimg' src='https://s3.us-west-1.amazonaws.com/f22labs.com/fdlogo.svg' alt='frankdarling' />
        </div>
        <div className='contents'>
          <h1>Your one-stop shop for buying engagement rings online</h1>
          <div className='contents-desc'>
            <h4>This website allows users to buy custom engagement rings and diamond jewellery online.</h4>
          </div>
          <div className='white-points'></div>
          <span>Revamped the website using React JS to improve its performance.</span>
          <span>Made enhancements for the improved booking experience.</span>
          <span>Technology: React JS, Next JS, NodeJS, MySQL, Lambda.</span>
        </div>

      </div>
    </div>
  )
}

export default FeaturedProducts
