import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Message = ({ text, isSent }) => {
  return (
    <Box
      p="2"
      borderRadius="md"
      bg={isSent ? "blue.200" : "gray.200"}
      alignSelf={isSent ? "flex-end" : "flex-start"}
      maxWidth="70%" // Set a maximum width for the text bubbles
    >
      <Text fontSize="sm">{text}</Text>
    </Box>
  );
};

export default Message;
