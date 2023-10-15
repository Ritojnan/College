// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ChatLayout() {
//   const [messages, setMessages] = useState([]);
//   const [user, setUser] = useState('');
//   const [text, setText] = useState('');

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get('/api/messages');
//       setMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const sendMessage = async () => {
//     if (user && text) {
//       try {
//         await axios.post('/api/messages', { user, text });
//         setUser('');
//         setText('');
//         fetchMessages();
//       } catch (error) {
//         console.error('Error sending message:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Chat App</h1>
//       <div>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder="Enter your message"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       <div>
//         {messages.map((message) => (
//           <div key={message._id}>
//             <p>{message.user}: {message.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChatLayout;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = io.connect('http://localhost:5000'); // Replace with your server URL

  useEffect(() => {
    // Listen for 'newMessage' events and update messages state
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });             

    // Clean up event listener when component unmounts
    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        timestamp: new Date().toISOString(),
      };

      // Emit 'sendMessage' event to server
      socket.emit('sendMessage', message);

      // Clear the input field
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.text}</p>
            <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
