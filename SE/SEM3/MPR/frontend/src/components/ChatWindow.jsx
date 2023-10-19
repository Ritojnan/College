import { Box, VStack } from "@chakra-ui/react";
import Message from "./Message";

const ChatWindow = (props) => {
  const messages = props.messages;
  return (
    <Box maxH="100vh" overflowY="auto" flexGrow={1}>
      <VStack spacing="3" p="4" align="stretch">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} isSent={message.isSent} />
        ))}
      </VStack>
    </Box>
  );
};

export default ChatWindow;
