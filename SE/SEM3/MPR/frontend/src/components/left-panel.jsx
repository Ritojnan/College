import { Box, Flex,HStack,InputGroup,InputLeftElement } from '@chakra-ui/react';
import { ChatList } from './chat-list';
import { Header } from './Header';
import { SearchPanel } from './search-panel';
import React, { useState } from "react";
import { Input, VStack } from "@chakra-ui/react";
import SideCard from "./SideCard";
import { SearchIcon } from '../assets/icons';

import {
  Avatar,
  chakra,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { DeliveredIcon } from "../assets/icons";



const mockData = [
  {
    name: 'Erdemgg',
    src: 'https://randomuser.me/api/portraits/men/52.jpg',
    message: 'tamamdır. belgeleri sana gönderiyorum.',
    date: '16:20',
    seen: true,
  },
  {
    name: 'Babam',
    src: 'https://randomuser.me/api/portraits/men/21.jpg',
    message: 'Akşam amcanlara gidiyoruz. Gelecek misin?',
    date: '16:15',
    seen: false,
  },
  {
    name: 'Annem',
    src: 'https://randomuser.me/api/portraits/women/7.jpg',
    message: 'İlaçlarını içmeyi unutma sakın',
    date: 'Pazartesi',
    seen: true,
  },
  {
    name: 'Abim',
    src: 'https://randomuser.me/api/portraits/men/24.jpg',
    message: 'Çok teşekkür ederim.',
    date: 'Perşembe',
    seen: true,
  },
  {
    name: 'Harun',
    src: 'https://randomuser.me/api/portraits/men/34.jpg',
    message: '📷 Ben ne alaka',
    date: 'Cuma',
    seen: true,
  },
  {
    name: 'Mehmet',
    src: 'https://randomuser.me/api/portraits/men/6.jpg',
    message: '📄 ust-veraset-belge.pdf.pdf • 1 sayfa',
    date: 'Cuma',
    seen: true,
  },
  {
    name: 'Ayşe',
    src: 'https://randomuser.me/api/portraits/women/17.jpg',
    message: 'Tamam yarın görüşürüz.',
    date: 'Çarşamba',
    seen: false,
  },
  {
    name: 'İrem',
    src: 'https://randomuser.me/api/portraits/women/51.jpg',
    message: 'İyi bayramlar 💗🥺🥺🥺',
    date: 'Çarşamba',
    seen: false,
  },
  {
    name: 'Münir',
    src: 'https://randomuser.me/api/portraits/men/41.jpg',
    message: 'tamamdır. teşekkür ederim',
    date: '19.04.2023',
    seen: false,
  },
  {
    name: 'Taksi',
    src: '',
    message: "Tip için teşekkürler",
    date: '17.04.2023',
    seen: true,
  },
  {
    name: 'Restaurant',
    src: '',
    message: 'Eksiksiz gönderim için teşekkürler.',
    date: '16.04.2023',
    seen: true,
  },
  {
    name: 'Harun',
    src: 'https://randomuser.me/api/portraits/men/3.jpg',
    message: 'iyimiş bu',
    date: '15.04.2023',
    seen: false,
  },
];
const chatData=mockData;

export function Chat({ name, message, date, seen, src, ...rest }) {
  return (
    <HStack
      _hover={{
        cursor: "pointer",
        backgroundColor: "#f5f6f6",
      }}
      py="3"
      {...rest}
    >
      <Avatar mx="3" name={name} src={src} />
      <Box flex="1" pr="4">
        <Flex justify="space-between" align="baseline">
          <Box>
            <Text fontWeight="medium">{name}</Text>
            <HStack>
              <DeliveredIcon color={seen ? "#53bdeb" : "#667781"} />
              <Text noOfLines={[1,2,3]} color="#667781" fontSize="sm">
                {message}
              </Text>
            </HStack>
          </Box>
          <chakra.time fontSize="xs" color="#667781">
            {date}
          </chakra.time>
        </Flex>
      </Box>
    </HStack>
  );
}


export function LeftPanel(props) {

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = mockData.filter(
    person =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      // || person.number.includes(searchQuery)
  );

  return (
    <Flex direction='column' bg="#F9F9F9" {...props}>

      <Box>
        <Header />


        <HStack
        spacing={2}
        px='3'
        py='2'
        borderBottom='1px'
        borderColor='#e2e8f0'
        shadow="sm"
        
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color='gray.300' />}
          />
          <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                flexShrink={0} // Prevent input from shrinking
          
            _placeholder={{
              opacity: 0.6,
              color: '#3b4a54',
              paddingLeft: '24px',
              fontSize: '15px',
            }}
            h='36px'
            _hover={{ bg: '#f0f2f5' }}
            bg='#f0f2f5'
            variant='filled'
            placeholder='Search'
          />
        </InputGroup>
      
      </HStack>
      
            </Box>
            <Stack
        spacing="0"
        pr="1"
        divider={<StackDivider w="82%" alignSelf="flex-end" />}
        flex='1' overflow='auto'      >
           
    {/* {filteredData.map(person => (
      <SideCard key={person.id} person={person} />
    ))} */}
        {filteredData.map((item, index) => (
          <Chat
            key={index}
            src={item.src}
            date={item.date}
            message={item.message}
            name={item.name}
            seen={item.seen}
          />
        ))}
      </Stack>
      
          </Flex>
  );
}