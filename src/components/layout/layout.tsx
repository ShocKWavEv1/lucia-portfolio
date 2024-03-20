import { Box, Heading } from "@chakra-ui/react";
import { LayoutProps } from "./model";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w="100%" overflowX="hidden">
      <Box
        position="fixed"
        top="98px"
        left="-40px"
        bg="green.500"
        overflow="hidden"
        transform="rotate(-90deg)"
      >
        <Heading fontSize="26px">Lucia Serrano</Heading>
      </Box>
      <Box w="100%" bg="red" p="0px 48px 96px 128px">
        <Box w="100%" h="80px" bg="blue" display="flex" alignItems="center">
          navbar
        </Box>
        <Box w="100%" mt="40px">
          {children}
        </Box>
      </Box>
      <Box position="fixed" w="100%" h="40px" bottom={0} bg="primary.900">
        Footer
      </Box>
    </Box>
  );
};

export default Layout;
