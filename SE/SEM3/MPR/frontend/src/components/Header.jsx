import { Avatar, Flex, HStack, IconButton, Tooltip, Button, Icon } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "../assets/icons";
import {LuLogOut, LuSettings, LuUserCircle2} from 'react-icons/lu'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'


export function Header(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const openModal=()=>{

    console.log("NNN")
    onOpen();
  }

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
      <Avatar
        boxSize="40px"
        name="Enes Şahin"
        src="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <HStack spacing="3">
        
      <Tooltip
          shouldWrapChildren
          label="Invites"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
   <IconButton onClick={openModal} bg={"transparent"} aria-label='New Chat' icon={<LuUserCircle2 size={22}/>} />
          
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your chat creation form or content here */}
            This is where you can create a new chat.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* Add a button to submit the new chat */}
            <Button variant="ghost">Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        <Tooltip
          shouldWrapChildren
          label="New Chat"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
   <IconButton onClick={openModal} bg={"transparent"} aria-label='New Chat' icon={<NewChatIcon  />} />
          
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your chat creation form or content here */}
            This is where you can create a new chat.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
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
              <MenuItem><LuSettings size={16}/>&nbsp;Settings</MenuItem>
              <MenuItem><LuLogOut size={16}/>&nbsp; Log out</MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>

      </HStack>
    </Flex>
  );
}

