import React, { useState } from 'react';
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
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  FormControl, // Import FormControl
  FormLabel, // Import FormLabel
} from '@chakra-ui/react';

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
          {/* <Image src="/logo.png" alt="Company Logo" mb="4" /> Replace with your logo */}
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing="4">
                  <FormControl id="signupName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      name="signupName"
                      value={formData.signupName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl id="signupEmail" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="signupEmail"
                      value={formData.signupEmail}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl id="signupPassword" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="signupPassword"
                      value={formData.signupPassword}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    type="submit"
                    onClick={handleSignup}
                    isLoading={isLoading}
                  >
                    Sign Up
                  </Button>
                </VStack>
                {signupMessage && (
                  <Alert status={signupMessage.includes('successful') ? 'success' : 'error'} mt="4">
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {signupMessage.includes('successful') ? 'Success!' : 'Error!'}
                    </AlertTitle>
                    <AlertDescription>{signupMessage}</AlertDescription>
                    <CloseButton
                      onClick={() => setSignupMessage('')}
                      position="absolute"
                      right="8px"
                      top="8px"
                    />
                  </Alert>
                )}
              </TabPanel>
              <TabPanel>
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
                </VStack>
                {loginMessage && (
                  <Alert status={loginMessage.includes('successful') ? 'success' : 'error'} mt="4">
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {loginMessage.includes('successful') ? 'Success!' : 'Error!'}
                    </AlertTitle>
                    <AlertDescription>{loginMessage}</AlertDescription>
                    <CloseButton
                      onClick={() => setLoginMessage('')}
                      position="absolute"
                      right="8px"
                      top="8px"
                    />
                  </Alert>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </Box>
  );
};

export default Signup;