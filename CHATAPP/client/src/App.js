import React, { useState } from 'react';
import io from 'socket.io-client';
import Login from './Login';
import Account from './Account';
import Contacts from './Contacts';
import ContactHeader from './ContactHeader';
import ContactOptions from './ContactOptions';
import ChatHistory from './ChatHistory';
import ChatComposer from './ChatComposer';
import Notification from './Notification';
import './App.css';


const App = () => {
const [username, setUsername] = useState('');
const [activeContact, setActiveContact] = useState(null);
const [notification, setNotification] = useState(null);
const [socket, setSocket] = useState(null);
const handleLogin = (username) => {
setUsername(username);

// connect to socket server
const socket = io('http://localhost:3000');
setSocket(socket);
};
const handleContactClick = (contact) => {
setActiveContact(contact);
};
const handleLogout = () => {
setUsername('');
setActiveContact(null);
setNotification(null);
socket.disconnect();
};
return (
<div>
{username ? (
<div>
<Account username={username} />
<Contacts
activeContact={activeContact}
on
ContactClick={handleContactClick}
socket={socket}
/>
{activeContact ? (
<div>
<ContactHeader contact={activeContact} />
<ContactOptions onLogout={handleLogout} />
<ChatHistory
             activeContact={activeContact}
             socket={socket}
             setNotification={setNotification}
           />
<ChatComposer
             activeContact={activeContact}
             socket={socket}
             setNotification={setNotification}
           />
</div>
) : (
<p>Please select a contact to chat with.</p>
)}
{notification && <Notification message={notification} />}
</div>
) : (
<Login onLogin={handleLogin} />
)}
</div>
);
};
export default App;
