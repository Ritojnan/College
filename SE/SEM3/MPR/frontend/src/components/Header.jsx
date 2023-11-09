import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Tooltip,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "../assets/icons";
import { LuLogOut, LuSettings, LuUserCircle2 } from "react-icons/lu";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";
import InviteBody from "./InviteBody";
import InviteInput from "./InviteInput";
import UserDetails from "./UserDetails";
import { useState } from "react";
import GroupChatCreator from "./GroupChatCreator";
export function Header(props) {
  const inviteModalDisclosure = useDisclosure();
  const newChatModalDisclosure = useDisclosure();
  const logoutModalDisclosure = useDisclosure();
  const settingsModalDisclosure = useDisclosure();

  const cancelRef = useRef();

  const initialUser = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    contactList: ['Friend 1', 'Friend 2'],
    address: '123 Main St, City, State, Country, 12345',
  };

  const [user, setUser] = useState(initialUser);

  const saveUserDetails = (updatedUser) => {
    // Implement the API request to save updated user details
    // For demonstration purposes, we'll update the user state
    setUser(updatedUser);
  };

  return (
    <Flex
      bg="#F9F9F9"
      justify="space-between"
      py="2"
      px="4"
      borderRight="1px solid #f2f2f2"
      color="#54656f"
      shadow="sm"
      {...props}
    >
      <Avatar boxSize="40px" name="Enes Şahin" src="" />
      <HStack spacing="3">
        <Tooltip
          shouldWrapChildren
          label="Invites"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
          <IconButton
            onClick={inviteModalDisclosure.onOpen}
            bg={"transparent"}
            aria-label="Invites"
            icon={<LuUserCircle2 size={22} />}
          />
        </Tooltip>
        {/* Modal for invites */}
        <Modal isOpen={inviteModalDisclosure.isOpen} onClose={inviteModalDisclosure.onClose} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Invites</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InviteBody/>
            </ModalBody>
            
          </ModalContent>
        </Modal>

        <Tooltip
          shouldWrapChildren
          label="New Chat"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
          <IconButton
            onClick={newChatModalDisclosure.onOpen}
            bg={"transparent"}
            aria-label="New Chat"
            icon={<NewChatIcon />}
          />
        </Tooltip>
        {/* Modal for new chat */}
        <Modal isOpen={newChatModalDisclosure.isOpen} onClose={newChatModalDisclosure.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a New Chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              This is where you can create a new chat.

              <InviteInput/>
              <Divider my={4}/>
              <GroupChatCreator/>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={newChatModalDisclosure.onClose}>
                Close
              </Button>
              {/* Add a button to submit the new chat */}
              <Button variant="ghost">Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Tooltip
          shouldWrapChildren
          label="Menu"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
          <Menu>
            <MenuButton variant="ghost">
              <MenuIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={settingsModalDisclosure.onOpen}>
                <LuSettings size={16} />
                &nbsp;Settings
              </MenuItem>
              <MenuItem onClick={newChatModalDisclosure.onOpen}>
                <LuLogOut size={16} />
                &nbsp; Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>
      </HStack>

      {/* Alert for logout */}
      <AlertDialog
        isOpen={logoutModalDisclosure.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={logoutModalDisclosure.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Log out</AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to log out?</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={logoutModalDisclosure.onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  localStorage.removeItem("authtoken");
                  location.reload();
                }}
              >
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

{/* modal for seetings */}
      <Modal size={"full"} isOpen={settingsModalDisclosure.isOpen} onClose={settingsModalDisclosure.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <UserDetails user={user} onSave={saveUserDetails} />
              </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={settingsModalDisclosure.onClose}>
                Close
              </Button>
              {/* Add a button to submit the new chat */}
              <Button variant="ghost">Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Flex>
  );
}
