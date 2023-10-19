import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

import ChatWindow from '../components/ChatWindow';
import { Box, Divider, VStack,Flex, IconButton,Input,Button } from "@chakra-ui/react";
import { LuSendHorizonal } from 'react-icons/lu';
const socket = io.connect('http://localhost:5000'); // Replace with your server URL

export default function ChatLayout() {
  const { id } = useParams();
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", isSent: true },
    { id: 2, text: "Hi there! Lorem ipsum lorem4000000000000000 dolor, sit amet consectetur adipisicing elit. Fugiat eius asperiores cum alias doloremque obcaecati ipsum, dolores nesciunt culpa ea!", isSent: false },
  ]);

  
  // Cleanup function to leave the current room when the component unmounts or when id changes
  useEffect(() => {
    if (room) {
      socket.emit('leave_room', room);
    }
    // socket.disconnect() works ig??
  }, [room]);

  
  useEffect(() => {
    // You can perform any actions you want here when 'id' changes.
    console.log('ID has changed:', id);

    // Update the 'room' state or take other actions as needed
    setRoom(id);

    // Example: Join the new room
    socket.emit('join_room', id);
  }, [id]);


//   const sendMessage = () => {
//     socket.emit('send_message', { message, room });
// console.log({message,room})
//     // Add the sent message to the array
//     setMessages([...messages,{ id: messages.length+1, text: message, isSent: false }]);

//     // Clear the input field
//     setMessage('');
//   };

const sendMessage = () => {
  socket.emit('send_message', { message, room });
  console.log({ message, room });

  // Add the sent message to the array
  setMessages((prevMessages) => [
  
    ...prevMessages,
    {
      id: Date.now(), // You can use a better method to generate unique IDs
      text: message,
      isSent: true,
    },
  ]);

  // Clear the input field
  setMessage('');
};
  useState(()=>{
    if (room !== '') {
    setRoom(id);
    console.log(room)
    socket.emit('join_room', room);
  }
},[id])
useEffect(() => {
  socket.on('receive_message', (data) => {
    console.log('Received message:', data.message);

    // Add the received message to the array
    setMessages([...messages, { id: Date.now(), text: data.message, isSent: false }]);
  });
}, [socket, messages]);
  return (
    <>
    <Box
      p={{ base: "2", md: "4" }} // Adjust padding based on screen size
      borderWidth="1px"
      borderRadius="md"
      height="100vh"
      width={{ base: "100%" }} // Set a responsive width
    >
      <ChatWindow messages={messages} />
      {/* <ImageUpload/>
      <ImageGallery/> */}
             {/* {messages.map((msg, index) => (
        <div key={index} className={messageTypes[index] === 'sent' ? 'sent' : 'received'}>
          {msg}
        </div>
      ))} */}


{/* ================================================= */}
<Divider />

<Flex
  aria-label="Open Navigation"
  position="fixed"
  bottom="1rem"
  zIndex="50"
  width={["90%", "70vw"]} // Responsive width
>

  <Input
    flex="1"
    placeholder="Type your message..."
    value={message}
    onChange={(event) => {
      setMessage(event.target.value);
    }}
  />
  <IconButton onClick={sendMessage} icon={<LuSendHorizonal />} />
</Flex>


    </Box>  
    </>
  
  );
}
