import React from "react";
import { Box, Divider, VStack,Flex } from "@chakra-ui/react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatComponent from "./ChatComponent";
import ImageUpload from "./ImageUpload";
import ImageGallery from "./ImageGallery";

const ChatApp = () => {
  const handleSendMessage = message => {
    // You can implement your actual sending logic here
    console.log("Sending message:", message);
  };

  return (
<>
    <Box
      p={{ base: "2", md: "4" }} // Adjust padding based on screen size
      borderWidth="1px"
      borderRadius="md"
      height="100vh"
      width={{ base: "100%" }} // Set a responsive width
    >
      <ChatWindow />
      <Divider />
      <ImageUpload/>
      <ImageGallery/>
      <ChatInput onSendMessage={handleSendMessage} />
      <ChatComponent/>
      
    </Box>  

    </>
  );
};

export default ChatApp;