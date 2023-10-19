import React from "react";
import { Box, Divider, VStack,Flex } from "@chakra-ui/react";
import ChatWindow from "./ChatWindow";
import ImageUpload from "./ImageUpload";
import ImageGallery from "./ImageGallery";
import { useParams } from "react-router-dom";

const ChatApp = () => {
//   const { id } = useParams()
// console.log(id)
//   const handleSendMessage = message => {
//     // You can implement your actual sending logic here
//     console.log("Sending message:", message);
//   };

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
      {/* <ImageUpload/>
      <ImageGallery/> */}
      <ChatInput  />
      
    </Box>  

    </>
  );
};

export default ChatApp;