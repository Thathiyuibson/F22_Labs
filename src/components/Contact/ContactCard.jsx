import React from 'react';

const ContactCard = ({ name, number, email, img }) => {
  return (
    <div className="contact-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{number}</p>
      <p>{email}</p>
    </div>
  );
};

export default ContactCard;
