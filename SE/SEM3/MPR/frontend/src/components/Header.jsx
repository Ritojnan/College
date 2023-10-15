import { Avatar, Flex, HStack, IconButton, Tooltip, Button } from "@chakra-ui/react";
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


export function Header(props) {
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
          label="New Chat"
          bg="#eae6df"
          color="black"
          fontSize="xs"
        >
           <NewChatIcon />
        </Tooltip>

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
              <MenuItem>Settings</MenuItem>
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>

      </HStack>
    </Flex>
  );
}

