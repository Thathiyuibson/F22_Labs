import React, { useState, useEffect } from 'react';
import './ParticularCareer.scss';
import { Link, useParams } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShareIcon from '@mui/icons-material/Share';
import CareerFooter from '../../components/CareerFooter/CareerFooter'

const ParticularCareer = () => {
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/careers/${id}`);
        const data = await response.json();
        setCareerData(data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching career data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(careerData)

  return (
    <div className='particular-career'>
      <div className='logo-container'>
        <Link to={'/'}>
        <img className='logo' src='https://f22labs.zohorecruit.in/recruit/viewCareerImage.do?page_id=65449000000346512&type=logo&file_name=F22logo__1_.png' alt='Logo' />
        </Link>
      </div>
      <div className='career-backgrounds'>
      <img src='https://www.f22labs.com/_next/image/?url=%2Fimages%2Fhero-section%2Fbg.png&w=1200&q=20' alt='' />
      </div>
      <div className='career-head'>
        <h3>F22Labs | Full time</h3>
        <h1>{careerData.title}</h1>
        <h3>Chennai,India | Posted on {careerData.Posted_on}</h3>
      </div>
      <div className='interested-button'>
        <button>I'm interested</button>
        <button>Refer a friend</button>
      </div>
      <div className='refer-icons'>
        <FacebookIcon />
        <XIcon />
        <LinkedInIcon />
        <WhatsAppIcon />
        <TelegramIcon />
        <ShareIcon />
      </div>
      <div className='breadcrumbs'>
        <Link to={'/careers'}>Job listing</Link>
        <div className='breadcrumbs2'>
        <h6> {'>'} Job details</h6>
        </div>
        
      </div>
      <div className='parent-div'>
        <div className='left-child'>
          <div className='jd'>
            <h1>Job Description</h1>
            <h3>Who we are:</h3>
            <p>
             {careerData.Who_we_are}
            </p>
            <h3>What we do:</h3>
            <p>
            {careerData.What_we_do}
            </p>
            <h3>Our Core Values:</h3>
            <p>
            <b>Honesty & Transparency:</b> Speak your mind and do what feels right.
            <br></br><b>Empathy:</b> Be kind. Listen Intently. Trust by default.
            <br></br><b>Stay Hungry, Stay Foolish:</b> Have childlike curiosity and hunger to learn.
            <br></br><b>Hustle Hard:</b>  Do more with less.
            <br></br><b>Teach, don’t preach:</b> Knowledge grows when shared.
            </p>
            <h3>Perks:</h3>
            <div className='perks'>
              {careerData.perks?.[0].children.map((text) => <p>{text.children?.[0].text}</p>)}
            </div>
          </div>
          <div className='requirements'>
            <h1>Requirements</h1>
            <p>
              {careerData.requirements}
            </p>
            <h1>Resposibilities</h1>
            <div className='points'>
              {careerData.responsibilities?.[0].children.map((text) => <p>{text.children?.[0].text}</p>)}
            </div>
          </div>
          <div className='benefits'>
            <h2>Benefits</h2>
            <h3>Requirements</h3>
            <div className='requirements'>
              {careerData.benefits?.[0].children.map((text) => <p>{text.children?.[0].text}</p>)}
            </div>
          </div>
          <div className='down-interest'>
            <button>I'm interested</button>
          </div>
        </div>
        <div className='right-child'>
          <h2>Job Information</h2>
          <div className='work-experiance'>
            <h4>Work Experience</h4>
            <h3>1-3 years</h3>
          </div>
          <div className='industry'>
            <h4>Industry</h4>
            <h3>IT Services</h3>
          </div>
          <div className='city'>
            <h4>City</h4>
            <h3>Chennai</h3>
          </div>
          <div className='state'>
            <h4>State/Province</h4>
            <h3>Tamil Nadu</h3>
          </div>
          <div className='country'>
            <h4>Country</h4>
            <h3>India</h3>
          </div>
          <div className='zipcode'>
            <h4>Zip/Postal Code</h4>
            <h3>600002</h3>
          </div>
        </div>
      </div>
      <div className='zoho'>
      <CareerFooter />
      </div>
      
    </div>
  )
}

export default ParticularCareer;
