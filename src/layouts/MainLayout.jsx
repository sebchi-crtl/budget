import MenuBar from "./../components/MenuBar.jsx";
import { Box } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import "@vetixy/circular-std"


const MainLayout = ({ children }) => {
  return (
    <Box
      backgroundColor="#FCFCFC"
      w="100%" h="100vh"
      style={{ fontFamily: 'CircularStd, sans-serif' }}
    >
      
      <MenuBar />
      <Outlet />
       {children}
      
    </Box>
  );
};


MainLayout.propTypes = {
  children: PropTypes.string.isRequired,
};



export default MainLayout;

