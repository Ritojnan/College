import {
    AbsoluteCenter,
    Center,
    Flex,
    Box,
    Heading,
    HStack,
    Text,
  } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
  
  export function RightPanel(props) {
    return (
      <Center
        bg='#F9F9F9'
        borderBottom='6px solid #43c960'
        position='relative'
        {...props}
        w="100%"
        shadow="md"
      >

        <Flex
          direction='column'
          textAlign='center'
          color='#41525d'
          align='center'          
        >
          <Box pt='8'>
            <Heading fontWeight='light'>Web Messaging App</Heading>
            <Text fontSize='sm' mt='4'>
              Send and receive messages from any device that has an internet connection
            </Text>
          </Box>
          <AbsoluteCenter axis='horizontal' bottom='10' flex='1' mt='10'>
            <HStack justifyItems='baseline' color='#8696a0'>
              <Text>HHHH</Text>
              <Outlet/>
            </HStack>
          </AbsoluteCenter>
        </Flex>
      </Center>
    );
  }