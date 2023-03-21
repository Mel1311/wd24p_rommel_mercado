import React from 'react';

const options = [
  { id: 1, name: 'Delete Contact' },
  { id: 2, name: 'Block Contact' },
];

const ContactOptions = () => {
  return (
    <div>
      <h2>Options</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>{option.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactOptions;
