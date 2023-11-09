import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

import ChatWindow from '../components/ChatWindow';
import { Box, Divider, VStack, Flex,Text, IconButton, Input, Center } from "@chakra-ui/react";
import { MdSend } from 'react-icons/md'; // Changed the icon to MdSend

const socket = io.connect('https://gwbd6ngq-5000.inc1.devtunnels.ms'); // Replace with your server URL

export default function ChatLayout() {
  const { id } = useParams();
  const [room, setRoom] = useState(id); // Initialize 'room' state with 'id'
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Cleanup function to leave the current room when the component unmounts
  useEffect(() => {
    return () => {
      if (room) {
        socket.emit('leave_room', room);
      }
    };
  }, [room]);

  // Join the room when 'id' changes
  useEffect(() => {
    setRoom(id); // Update 'room' state
    socket.emit('join_room', id);
  }, [id]);

  // Send a message
  const sendMessage = () => {
    if(message.trim()==''){return;}
    socket.emit('send_message', { message, room });

    // Add the sent message to the array
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: Date.now(),
        text: message,
        isSent: true,
      },
    ]);

    // Clear the input field
    setMessage('');
  };

  // Listen for received messages
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('Received message:', data.message);

      // Add the received message to the array
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: Date.now(),
          text: data.message,
          isSent: false,
        },
      ]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('receive_message');
    };
  }, [socket]);

  return (
    <Box
      p={{ base: "2", md: "4" }}
      borderWidth="1px"
      borderRadius="md"
      height="100vh"
      width={{ base: "100%" }}
    >
      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xl">{id}</Text>
    </Box>
    <Divider/>
      <ChatWindow messages={messages}  />
      <Divider />

      <Flex
        aria-label="Type your message"
        position="fixed"
        bottom="1rem"
        zIndex="50"
        width={["90%", "70vw"]}
      >
        <Input
          flex="1"
          placeholder="Type your message..."
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <IconButton onClick={sendMessage} icon={<MdSend />} />
      </Flex>
    </Box>
  );
}
