import MenuBar from "./../components/MenuBar.jsx";
import { Box } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <Box
      backgroundColor="#FCFCFC"
      w="100%" h="100%"
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

