import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket=io.connect("http://localhost:5000")
const ChatComponent = () => {


    const sendMessage=()=>{
        socket.emit("send_message",{message:"hello"});
    }

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            console.log(data)
        })
    },[socket])
    return(
        <>
        <div>
            <input type="text" />
            <button onClick={sendMessage}>Send</button>
        </div>
        </>
    )
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Replace 'http://localhost:5000' with your server's URL
//     const newSocket = io('http://localhost:5000');

//     newSocket.on('connect', () => {
//       console.log('Connected to server');
//     });

//     newSocket.on('chat message', (msg) => {
//       // Handle incoming messages
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     setSocket(newSocket);

//     return () => {
//       // Clean up the socket connection when the component unmounts
//       newSocket.disconnect();
//     };
//   }, []);

//   const handleSendMessage = () => {
//     if (socket && message.trim() !== '') {
//       socket.emit('chat message', message); // Send a message to the server
//       setMessage(''); // Clear the input field
//     }
//   };

//   return (
//     <div>
//       <h1>Chat Component</h1>
//       <div>
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//       </div>
//       <input
//         type="text"
//         placeholder="Enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
};

export default ChatComponent;
