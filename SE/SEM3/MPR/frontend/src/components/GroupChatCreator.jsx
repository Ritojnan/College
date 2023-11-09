import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  HStack,
  CloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const GroupChatCreator = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [users] = useState([
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
    'User 6',
  ]);

  const addUserToGroup = () => {
    if (selectedUser) {
      setSelectedUsers([...selectedUsers, selectedUser]);
      setSelectedUser('');
    }
  };

  const removeUserFromGroup = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u !== user));
  };

  const createGroupChat = () => {
    // Implement the logic to create a group chat here
    // You can use selectedUsers and groupName to create the chat
    console.log('Creating group chat with users:', selectedUsers);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text fontSize="xl" mb={4}>
        Create Group Chat
      </Text>
      <FormControl>
        <FormLabel>Group Name</FormLabel>
        <Input
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Select Users to Add</FormLabel>
        <HStack>
          <Select
            placeholder="Select a user"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </Select>
          <Button colorScheme="teal" onClick={addUserToGroup}>
            Add
          </Button>
        </HStack>
      </FormControl>
      {selectedUsers.length > 0 && (
        <Stack mt={4}>
          <Text fontWeight="bold">Selected Users:</Text>
          <Wrap>
            {selectedUsers.map((user) => (
              <WrapItem                 bg={'teal.400'} rounded={'full'}
              key={user}>
                <CloseButton
                  size="sm"
                  onClick={() => removeUserFromGroup(user)}
                />
                {user}
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      )}
      <Button
        colorScheme="teal"
        mt={4}
        onClick={createGroupChat}
        isDisabled={!groupName || selectedUsers.length === 0}
      >
        Create Group Chat
      </Button>
    </Box>
  );
};

export default GroupChatCreator;
