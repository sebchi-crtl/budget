import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Icon, createIcon } from "@chakra-ui/react";
import { SlHome } from "react-icons/sl";
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


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
          color={["#F1FCFC", "#F1FCFC"]}
          bg={["#C1C4CD", "#C1C4CD"]}
          _hover={{
            bg: ["gray.400", "gray.500"]
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
        <Text fontSize='.84em' fontWeight='600' display="block" {...rest}
          _hover={{
            color: [ "gray.600"]
          }}
        >
          {children}
        </Text>
      </Link>
    </Box>
    
  );
};

const ReportIcon = (props) => (
  <Icon w={5} h={5} viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      fill="#C1C4CD"
      d="M17.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5125C0 18.8875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V7.5L17.5 0ZM2.5 17.5125V2.5H16.25V8.75H22.5V17.5125H2.5Z"
    />
  </Icon>
);

const ChatIcon = (props) => (
  <Icon w={5} h={5} viewBox="7 5 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M35 19.5C35 13.1487 29.8513 8 23.5 8C17.1487 8 12 13.1487 12 19.5C12 25.8513 17.1487 31 23.5 31C29.8513 31 35 25.8513 35 19.5Z" stroke="#797B8B" stroke-width="2"/>
    <path opacity="0.6" d="M26.8984 17.6353H24.5267V23.6783H22.8156V17.6353H20.4547V16H26.8984V17.6353Z" stroke="#797B8B" stroke-width="0.803901"/>
   
  </Icon>
);


const MenuLinks = () => {
  return (
    <Box
      display={{ base: "block", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[5, 8]}
        align="center"
        justify={["space-between", "space-between"]}
        direction={["row", "row", "row", "row"]}
        pt={[1, 1, 0, 0]}
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

            <ReportIcon />
            Reports
          </Flex>
          
        </MenuItem>
        <MenuItem to="/faetures">
          <Flex
            gap={2}
            direction={["column", "row"]}
            align="center"
          >
            <ChatIcon/>
            Chat
          </Flex>
          
        </MenuItem>
        <MenuItem to="/budget" >
          <Flex
            gap={[2, 3]}
            direction={["column", "row"]}
            align="center"
            color="#001233"
          >
            <Icon w={5} h={5} color="#0466C8" as={ MdOutlineBarChart }/>
            Budget
          </Flex>
          
        </MenuItem>
        <MenuItem to="/pricing" isLast>
          <Flex
            gap={[2, 3]}
            direction={["column", "row"]}
            align="center"
          >
            <Icon w={5} h={5} as={ FaRegUser }/>
            Profile
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
      bg={[ "white"]}
      color={["#C1C4CD"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
// #FCFCFC",
export default NavBar;
