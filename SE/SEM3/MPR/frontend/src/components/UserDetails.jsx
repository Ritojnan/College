import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  List,
  ListItem,
  UnorderedList,
  Divider,
  Flex,
  Spacer,
  Button,
  Input,
  FormControl,
} from '@chakra-ui/react';

const UserDetails = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser); // This function should handle the API request to save the changes
    setIsEditing(false);
  };

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      {isEditing ? (
        <Button
          colorScheme="teal"
          size="sm"
          mb={4}
          onClick={handleSave}
        >
          Save
        </Button>
      ) : (
        <Button
          colorScheme="orange"
          size="sm"
          mb={4}
          onClick={toggleEdit}
        >
          Edit
        </Button>)
      }
      <Flex>
        <FormControl>
          <Text fontWeight="bold">Name:</Text>
          <Input
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
        <Spacer />
        <FormControl>
          <Text fontWeight="bold">Username:</Text>
          <Input
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
            isReadOnly={!isEditing}
          />
        </FormControl>
      </Flex>
      <Divider my={4} />
      <FormControl>
        <Text fontWeight="bold">Email:</Text>
        <Input
          name="email"
          value={editedUser.email}
          onChange={handleInputChange}
          isReadOnly={!isEditing}
        />
      </FormControl>
      <Divider my={4} />
      <FormControl>
        <Text fontWeight="bold">Phone Number:</Text>
        <Input
          name="phoneNumber"
          value={editedUser.phoneNumber || ''}
          onChange={handleInputChange}
          isReadOnly={!isEditing}
        />
      </FormControl>
      <Divider my={4} />
      <FormControl>
        <Text fontWeight="bold">Contact List:</Text>
        <UnorderedList>
          {editedUser.contactList.map((contact, index) => (
            <ListItem key={index}>{contact}</ListItem>
          ))}
        </UnorderedList>
      </FormControl>
      <Divider my={4} />
      <FormControl>
        <Text fontWeight="bold">Address:</Text>
        <Input
          name="address"
          type="textarea"
          value={editedUser.address}
          onChange={handleInputChange}
          isReadOnly={!isEditing}
        />
      </FormControl>
    </Box>
  );
};

export default UserDetails;
