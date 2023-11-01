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
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

export default function VerifyEmailForm(props) {
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [otp, setOtp] = useState(''); // State to store OTP input
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State to control the success alert

  const verifyOtp = () => {
    // Simulate a delay for 1 second before proceeding
    setLoading(true);
    setTimeout(() => {
      console.log('OTP:', otp); // Log the OTP
      setLoading(false);

      // You can make your API request here, and based on the response, show either success or error alert.
      // For now, we will directly show a success alert.
      setShowSuccessAlert(true);
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
          +91 ....//props
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput value={otp} onChange={(value) => setOtp(value)}>
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
                <ChakraLink as={Link} to="/chat">
                  Go to Chat
                </ChakraLink>
              </AlertTitle>
            </Alert>
          ) : null}
        </Stack>
      </Stack>
  );
}
