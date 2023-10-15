import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Message from "./Message";

const messages = [
  { id: 1, text: "Hello!", isSent: true },
  { id: 2, text: "Hi there! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius asperiores cum alias doloremque obcaecati ipsum, dolores nesciunt culpa ea!", isSent: false },
  // Add more messages here
];

const ChatWindow = () => {
  return (
    <VStack spacing="3" p="4" align="stretch" overflowY="auto" maxH="100vh" flexGrow={1}>

      {messages.map(message => (
        
        <Message key={message.id} text={message.text} isSent={message.isSent} width />
      ))}
    </VStack>
  );
};

export default ChatWindow;
