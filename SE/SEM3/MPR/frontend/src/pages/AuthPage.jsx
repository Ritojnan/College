import React, { useState,useEffect } from 'react';
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Button,
  VStack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Alert,
  Link as ChakraLink,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  FormControl, // Import FormControl
  FormLabel,
  Divider, // Import FormLabel
} from '@chakra-ui/react';
import Multistep from '../components/Multistep';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signupMessage, setSignupMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [formData, setFormData] = useState({
    signupName: '',
    signupEmail: '',
    signupPassword: '',
    loginEmail: '',
    loginPassword: '',
  });

  const handleSignup = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.signupName,
            email: formData.signupEmail,
            password: formData.signupPassword,
          }),
        });

        const data = await response.json();
        console.log(response)
        if (response.status === 200) {
          setSignupMessage('Registration successful!');
          // Save authtoken to localStorage
          localStorage.setItem('authtoken', data.authtoken);

        } else {
          setSignupMessage(data.error || 'Registration failed.');
        }
      } catch (error) {
        setSignupMessage('Registration failed. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };

  const handleLogin = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.loginEmail,
            password: formData.loginPassword,
          }),
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
          setLoginMessage('Login successful!');
          // Save authtoken to localStorage
          localStorage.setItem('authtoken', data.authtoken);

        } else {
          setLoginMessage(data.error || 'Login failed.');
        }
      } catch (error) {
        setLoginMessage('Login failed. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (

    <Box
      bgImage="url('/auth_back.jpg')" // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Center h="100%">
        <Flex
          direction="column"
          bg="white"
          p="8"
          rounded="md"
          shadow="lg"
          maxW="400px"
          w="100%"
        >
 <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={3}
    >
      <Text color={'blue.600'}   fontSize="3xl">Login</Text>
    </Box>
    <Divider my={5}/>
<VStack spacing="4">
                  <FormControl id="loginEmail" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="loginEmail"
                      value={formData.loginEmail}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl id="loginPassword" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="loginPassword"
                      value={formData.loginPassword}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    type="submit"
                    onClick={handleLogin}
                    isLoading={isLoading}
                  >
                    Login
                  </Button>

                  <Divider m={3}/>
        <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={3}
    >
      <Text fontSize="xl">Dont have an account?</Text>
    </Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ChakraLink as={Link} to="/register" fontSize="xl" color={'blue.500'}>
        Register Now
      </ChakraLink>
    </Box>
                </VStack>
                {loginMessage && (
                  <Alert status={loginMessage.includes('successful') ? 'success' : 'error'} mt="4">
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {loginMessage.includes('successful') ? 'Success!' : 'Error!'}
                    </AlertTitle>
                    <AlertDescription>{loginMessage}<Text>
                      
                      <ChakraLink as={Link} color={'teal'} to={"chat"}>Go to Chats</ChakraLink>
                      </Text>
                      </AlertDescription>
                    <CloseButton
                      onClick={() => setLoginMessage('')}
                      position="absolute"
                      right="8px"
                      top="8px"
                    />
                  </Alert>
                )}

        </Flex>
      </Center>
    </Box>
  );
};

export default Signup;