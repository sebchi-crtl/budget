import React from 'react';
import NavBar from '../components/menu'
import { Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom"

const MainLayout = ({ children, ...props  }) => {
  return (
    <Box
      backgroundColor="#FCFCFC"
      w="100%" h="100%"
    >
      
      <NavBar />
      <Outlet />
      {children}
    </Box>
  );
};

export default MainLayout;