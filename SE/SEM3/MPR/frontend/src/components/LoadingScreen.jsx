import React, { useState, useEffect } from "react";
import { Box, Center, CircularProgress, Grid ,Flex,IconButton} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { LeftPanel } from "./left-panel";
import { RightPanel } from "./right-panel";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate API request with a timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        // Replace this with actual API request logic
        // For demonstration, we'll increase the progress by 10% every 1 second
        setProgress(prevProgress => prevProgress + 100);
      } else {
        clearInterval(timer);
        setLoading(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);


  const { isOpen, onOpen, onClose } = useDisclosure();

  const isSmallerScreen = useBreakpointValue({ base: true, lg: false });


  return (
    <>

    <Box height="100vh">
      {loading ? (
        <Center height="100%">
          <CircularProgress value={progress} size="100px" thickness="8px" />
        </Center>
      ) : (<>
       
      <Flex h="100vh">
      {isSmallerScreen ? (
        <>
          <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
  <DrawerOverlay>
    <DrawerContent bg="#F9F9F9">
      <DrawerHeader>
        <DrawerCloseButton />
      </DrawerHeader>
      <DrawerBody>
        <LeftPanel />
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>



          <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Navigation"
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="1000"
        onClick={onOpen}

      />        </>
      ) : (
        <LeftPanel />
      )}
      <RightPanel />
    </Flex>

        </>
      )}
    </Box>
    
   
    </>
  );
};

export default LoadingScreen;
