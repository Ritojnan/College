import React, { useState, useEffect } from 'react';
import { VStack, Box, Text, Button, Spinner,HStack, IconButton } from '@chakra-ui/react';
import {AddIcon,CloseIcon} from "@chakra-ui/icons"
const UserCard = ({ user, onConfirm, onDecline, isLoading }) => {
  const { name, username } = user;

  return (
    <Box borderWidth="1px" p={4} borderRadius="md" width="100%" mb={4}>
      <HStack justify={'space-between'}>
        <Box>

        <Text fontSize="lg">{name}</Text>
        <Text fontSize="sm">@{username}</Text>

        </Box>
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <HStack spacing={2}>
            <IconButton colorScheme="green"   icon={<AddIcon />} onClick={() => onConfirm(user)}/>
              
              <IconButton colorScheme="red" icon={<CloseIcon/>} onClick={() => onDecline(user)}/>

          </HStack>
        )}
      </HStack>
    </Box>
  );
};

const fakeApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate an API response
      resolve([
        { id: 1, name: 'Amit Kumar', username: 'amitkumar1' },
        { id: 2, name: 'Rajesh Sharma', username: 'rajeshsharma2' },
        { id: 3, name: 'Sneha Patel', username: 'snehapatel3' },
        { id: 4, name: 'Neha Gupta', username: 'nehagupta4' },
        { id: 5, name: 'Deepak Singh', username: 'deepaksingh5' },
        { id: 6, name: 'Priya Verma', username: 'priyaverma6' },
            ]);
    }, 1000); // Simulated 1-second delay
  });
};

const InviteBody = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeApiCall().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  const handleConfirm = (user) => {
    // Implement the confirm action here
  };

  const handleDecline = (user) => {
    // Implement the decline action here
  };

  return (
    <VStack spacing={4}>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onConfirm={handleConfirm}
            onDecline={handleDecline}
            isLoading={isLoading}
          />
        ))
      )}
    </VStack>
  );
};

export default InviteBody;
