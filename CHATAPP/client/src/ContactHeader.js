import React from 'react';

const ContactHeader = ({ contact }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
    </div>
  );
};

export default ContactHeader;
