import { Link, useRouteError } from "react-router-dom";
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function CareersError() {
  const error = useRouteError();

  return (
    <Box
      className="careers-error"
      p={8}
      mx="auto"
      maxW="400px"
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="white"
    >
      <Heading as="h2" size="lg" mb={4}>
        Error
      </Heading>
      <Text fontSize="lg" mb={4}>
        {error.message}
      </Text>
      <ChakraLink as={Link} to="/" color="blue.500">
        Back to the Homepage
      </ChakraLink>
    </Box>
  );
}
