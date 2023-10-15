import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setIsFormDisabled(true);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsFormDisabled(false);
    }, 5000); // 5 seconds
  };

  useEffect(() => {
    // Enable the form after 5 seconds
    if (isFormDisabled) {
      const enableFormTimeout = setTimeout(() => {
        setIsFormDisabled(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(enableFormTimeout);
    }
  }, [isFormDisabled]);

  const backgroundImage = useBreakpointValue({
    base: "none", // No background image on mobile
    lg: "url('background_image.jpg')", // Background image on laptops
  });

  return (
    <Box
      p="4"
      maxW="400px"
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg={backgroundImage}
      bgSize="cover"
    >
      <VStack spacing="4" bgColor="white" p="6" rounded="md">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button
          colorScheme="blue"
          isLoading={isLoading}
          onClick={handleSubmit}
          isDisabled={isFormDisabled}
        >
          {isLoading ? "Loading..." : "Log in"}
        </Button>
      </VStack>
    </Box>
  );
};

export default AuthPage;
