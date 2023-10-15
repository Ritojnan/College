import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const SideCard = ({ person }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="3"
      cursor="pointer"
      _hover={{ backgroundColor: "gray.100" }}
    >
      <Flex align="center">
        <Image src={person.image} alt={person.name} boxSize="40px" borderRadius="full" />
        <Box ml="3">
          <Text fontWeight="bold">{person.name}</Text>
          <Text fontSize="sm" color="gray.500">
            {person.number}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {person.recentChat}
          </Text>
        </Box>
        <Box ml="auto">
          <Text fontSize="sm" color="gray.500">
            {person.date}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SideCard;
