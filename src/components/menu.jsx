import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Icon } from "@chakra-ui/react";
import { SlHome } from "react-icons/sl";

import { ReactComponent as Logo } from "../crown.svg";

const NavBar = (props) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuLogo />
      {/* <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} /> */}
      <MenuLinks />
      <MenuAccount />
    </NavBarContainer>
  );
};

const MenuLogo = () => {
  return (
    <Box display={{ base: "none", md: "block" }} >
      <Logo 
        display={{ base: "none", md: "block" }}
      />
    </Box>
  );
};


const MenuAccount = () => {
  return (
    <Box display={{ base: "none", md: "block" }} >
      <Flex
       align="center"
       gap='4'
      >
        <Button
          size="sm"
          rounded="2xl"
          color={["primary.500", "primary.500", "white", "white"]}
          bg={["white", "white", "primary.500", "primary.500"]}
          _hover={{
            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
          }}
        >
          P
        </Button>
        <MenuItem to="/signup" >
          Account
        </MenuItem>
      </Flex>
    </Box>
  );
};

// const CloseIcon = () => (
//   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//     <title>Close</title>
//     <path
//       fill="white"
//       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
//     />
//   </svg>
// );

// const MenuIcon = () => (
//   <svg
//     width="24px"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="white"
//   >
//     <title>Menu</title>
//     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//   </svg>
// );

// const MenuToggle = ({ toggle, isOpen }) => {
//   return (
//     <Box display={{ base: "block", md: "lex" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   );
// };

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Box>

      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </Box>
    
  );
};

const MenuLinks = () => {
  return (
    <Box
      display={{ base: "block", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 8]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["row", "row", "row", "row"]}
        pt={[2, 2, 0, 0]}
      >
        
        <MenuItem to="/">
          <Flex
            gap={[2, 3]}
            direction={["column", "row"]}
            align="center"
          >
            <Icon w={5} h={5} as={ SlHome }/>
            Home
          </Flex>
          
        </MenuItem>
        <MenuItem to="/how">
          <Flex
            gap={[2, 3]}
            direction={["column", "row"]}
            align="center"
          >
            <Icon w={5} h={5} as={ SlHome }/>
            Reports
          </Flex>
          
        </MenuItem>
        <MenuItem to="/faetures">
          <Flex
            gap={2}
            direction={["column", "row"]}
            align="center"
          >
            <Icon w={5} h={5} as={ SlHome }/>
            Chat
          </Flex>
          
        </MenuItem>
        <MenuItem to="/pricing" isLast>
          <Flex
            gap={[2, 3]}
            direction={["column", "row"]}
            align="center"
          >
            <Icon w={5} h={5} as={ SlHome }/>
            Budget
          </Flex>
          
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      position={["fixed", "static"]}
      bottom="0" left="0"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={[0, 8]}
      p={8}
      bg={["black", "transparent"]}
      color={["white", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
