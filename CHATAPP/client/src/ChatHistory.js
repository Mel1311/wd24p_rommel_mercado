import React from 'react';

const messages = [
  { id: 1, sender: 'John Doe', text: 'Hello, how are you?' },
  { id: 2, sender: 'Jane Doe', text: 'I am good, thanks. How about you?' },
  { id: 3, sender: 'John Doe', text: 'I am doing well, thanks for asking.' },
];

const ChatHistory = () => {
  return (
    <div>
      <h2>Chat History</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
