import React, { useState, useEffect } from 'react';
import { Box, Flex, Spacer, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

// Uncomment and customize the LogoIcon component as needed
const LogoIcon = () => {
  return (
    <Box as="span" fontWeight="bold" fontSize="xl">
      MeSaynger
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsSticky(scrollTop > 0);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="nav"
      position={isSticky ? 'fixed' : 'relative'}
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={isSticky ? 'white' : 'transparent'}
      boxShadow={isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        py={2}
        align="center"
      >
        {/* Uncomment the LogoIcon component here */}
        <LogoIcon />
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }}>
          {/* Mobile menu toggle button */}
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end" // Align links to the right
        >
          {/* Navigation links */}
        </Box>
      </Flex>
      {/* Additional content */}
    </Box>
  );
};

export default Navbar;
