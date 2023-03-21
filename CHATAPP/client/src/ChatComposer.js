import React, { useState } from 'react';
const ChatComposer = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle message send logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
placeholder="Type your message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button type="submit">Send</button>
  </form>
</div>
);
};

export default ChatComposer;
