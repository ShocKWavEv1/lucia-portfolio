import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="100%">
      <Box w="100%" h="100vh" bg="primary.200">
        <Heading fontSize="80px" color="primary.900">
          Hola texto
        </Heading>
        <Button colorScheme="primary">Button</Button>
      </Box>
    </Box>
  );
}
