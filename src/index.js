import '@fontsource/prata';
import '@fontsource/epilogue';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import theme from './theme';
import './i18n';

import App from './App';

AOS.init({
  once: true,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
