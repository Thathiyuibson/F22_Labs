import React from 'react';
import './FeaturedPages.scss';

const FeaturedPage = () => {
  return (
    <div className='featuredPage'>
      <div className='left'>
        <div className='heading'>
          <h2>Featured Case Study</h2>
          <div className='noisefit'>
            <img src='https://www.f22labs.com/images/featuredCaseStudy/noiseLogo.svg' alt='noisefit'/>
          </div>
          <div className='title'>
            <h1>One-stop solutions for all your daily fitness data from your smart watch</h1>
          </div>
          <div className='desc'>
            <p>
              Challenge - Analyzed and reviewed the SDKs available for each smartwatch model 
              and developed a bridge to transfer data from the smartwatch to Mobile Application.
            </p>
          </div>
          <div className='points'>
            <span><span className="bullet"></span>Noise brand sells both Bluetooth wearables and smartwatches online.</span>
            <span><span className="bullet"></span>This app connects with smartwatches, records and process activity data.</span>
            <span><span className="bullet"></span>Tools used: The usual stuff - Asana, Gitlab.</span>
            <span><span className="bullet"></span>Technology: Ruby on Rails, React Native, MySQL, AWS.</span>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='mobileimg'>
          <img src='https://www.f22labs.com/_next/image/?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Ff22labs.com%2Fteam2k21%2Fprojects%2FHomepageNoiseFit.png&w=384&q=30' alt='mobile'/>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPage;
