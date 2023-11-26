import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import customTheme from './utils/themes'

import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);


