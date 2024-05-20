import React from 'react';
import './Contact.scss';
import ContactCard from './ContactCard';
import { ContactDetails } from './ContactDetails';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';


const Contact = () => {
  return (
    <div className='first-div'>
      <div className='second-div'>
        <div className='second-left'>
  <div className='mainline'>
    <h1>We'd love to hear from you</h1>
  </div>
  <div className='maindesc'>
    <p>
      From crafting the perfect tech stack to a seamless launch,
      we've got your success covered. Ready to turn your idea into reality? Let's connect! 
    </p>
  </div>
  {ContactDetails.map(contact => (
    <div className='contact-card' key={contact.id}>
      <div className='contact-details'>
        <img className='contact-img' src={contact.img} alt={contact.name} />
        <div>
          <p>{contact.name}</p>
          <p className='number'><LocalPhoneOutlined /> {contact.number}</p>
          <p className='email'> <MailOutlinedIcon /> {contact.email}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className='second-right'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <textarea placeholder='Project Description'></textarea>
          <button>Submit Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
