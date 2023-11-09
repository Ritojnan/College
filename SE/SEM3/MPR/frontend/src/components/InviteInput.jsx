import React from 'react';
import { Input, InputGroup, InputRightElement, Button ,InputLeftAddon} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const InviteInput = () => {
  const toast = useToast();

  const sendInvite = async () => {
    // Simulate an API post request (dummy request)
    try {
      // Perform your API request here (simulated with setTimeout)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: 'Invite Sent',
        description: 'Your invite has been successfully sent!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while sending the invite.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (

    <InputGroup size="md">
    <InputLeftAddon children='@' />
      <Input
        type="text"
        placeholder="Enter username"
        borderRadius="full"
        _focus={{ borderColor: 'blue.500' }}
      />
      <InputRightElement width="8rem">
        <Button
          borderRadius="full"
          colorScheme="teal"
          size="md"
          onClick={sendInvite}
        >
          Send Invite
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InviteInput;
