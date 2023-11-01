import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Center,
  Text,
  Link as ChakraLink,
  Divider
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import OTP from "./OTP"
import axios from 'axios';

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpConfirmed, setOtpConfirmed] = useState(false);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

// State variables to store form data and address data
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
});

const [addressData, setAddressData] = useState({
  countryRegion: '',
  streetAddress: '',
  city: '',
  stateProvince: '',
  zipPostal: '',
});

// Function to handle form data changes
const handleFormDataChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Function to handle address data changes
const handleAddressDataChange = (e) => {
  const { name, value } = e.target;
  setAddressData({
    ...addressData,
    [name]: value,
  });
};

// Function to construct the JSON object
const constructJsonObject = () => {
  const json = {
    name: `${formData.firstName} ${formData.lastName}`,
    username: formData.firstName.toLowerCase(),
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phoneNumber,
    ...addressData,
    code: '',
  };

  // Log the JSON object to the console
  console.log(json);
};
  const sendOTPRequest = (phoneNumber) => {
    // Replace with your request URL
    const requestUrl = 'http://localhost:5000/api/auth/sendotp';
  
    // You can customize the request headers and data as needed
    const requestData = {
      phoneNumber
    };
  
    
      axios.post(requestUrl, requestData)
      .then((response) => {
        console.log('OTP request sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending OTP request:', error);
      });
  };

  
  const onCloseOtpDialog = () => {
    setShowOtpDialog(false);
  };

  const onConfirmOtp = (isConfirmed) => {
    if (isConfirmed) {
      setShowOtpDialog(false);
      setOtpConfirmed(true);
    }
  };

  return (
    <>
      <Box
      bgImage="url('/registration_back.jpg')" // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Center h="100%">
        
      <Box
        bgColor={'white'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated colorScheme={'purple'}></Progress>
        {step === 1 ? 
        
        <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
        
        : step === 2 ?
        
        <Box onShowOtpDialog={() => setShowOtpDialog(true)}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
         <option>Australia</option>
<option>United Kingdom</option>
<option>Germany</option>
<option>France</option>
<option>Spain</option>
<option>Italy</option>
<option>Japan</option>
<option>India</option>
<option>Brazil</option>
<option>South Africa</option>

        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </Box>
    
    :<></>}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="purple"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>


              
              <Button
      w="7rem"
      onClick={() => {
        // Call the function to construct the JSON object
        constructJsonObject();

        if (step === 2 && !otpConfirmed) {
          // Show the OTP dialog
          setShowOtpDialog(true);
        } else {
          setStep(step + 1);
          if (step === 3) {
            setProgress(100);
          } else {
            setProgress(progress + 33.33);
          }
        }
      }}
      colorScheme="purple"
      variant="solid"
    >
      {step === 2 && !otpConfirmed ? 'Get OTP' : 'Next'}
    </Button>

            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="purple"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        <Divider m={3}/>
        <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={3}
    >
      <Text fontSize="xl">Already Registered ? Go to  <ChakraLink as={Link} to="/auth" color={'purple.500'}>
        Login
      </ChakraLink></Text>
    </Box>
        <AlertDialog isOpen={showOtpDialog} >
        <AlertDialogOverlay>
          <AlertDialogContent>
          <Center>
            <OTP close={onCloseOtpDialog}/>
          </Center>
            
              
            
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Box>
      
      </Center>
     
      </Box>
    </>
  )
}