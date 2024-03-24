import { useState } from 'react'; // Import useState for state management
import { Link } from 'react-router-dom'; // Import Link for routing
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Center,
  Heading,
  Link as ChakraLink, // Rename Link to ChakraLink to avoid naming conflict
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import axios from 'axios';
export default function VerifyEmailForm(props) {
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [otp, setOtp] = useState(''); // State to store OTP input
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State to control the success alert
  const verifyOtp = () => {
    var requestbody = props.reqData;
    requestbody["code"] = otp;
    console.log(requestbody);
  
    // Simulate a delay for 1 second before proceeding
    setLoading(true);
    setTimeout(() => {
      // Construct the request payload
      const requestUrl = "http://localhost:5000/api/auth/createuser";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the appropriate content type
        },
        body: JSON.stringify(requestbody), // Convert requestbody to JSON
      };
  
      fetch(requestUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Account created successfully:", data.authtoken);
          setShowSuccessAlert(true);
        })
        .catch((error) => {
          console.error("Error sending OTP request:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };
  

  return (
    
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Account
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your phone number
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          {props.phoneNumber}
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput value={otp} onChange={(value) => setOtp(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={verifyOtp}
            isLoading={loading}
          >
            Verify
          </Button>
          <Button onClick={props.close} colorScheme="red" >
                Cancel
              </Button>
          {showSuccessAlert ? (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>
                Congratulation! Your account is verified.
                <Badge>

                <ChakraLink as={Link} to="/chat">
                  Go to Chat
                </ChakraLink>
                </Badge>
              </AlertTitle>
            </Alert>
          ) : null}
        </Stack>
      </Stack>
  );
}
