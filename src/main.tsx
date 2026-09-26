import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme/theme';
import { ColorModeProvider } from './components/ui/color-mode';

import './i18n';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <ChakraProvider value={system}>
          <App />
        </ChakraProvider>
      </ColorModeProvider>
    </BrowserRouter>
  </StrictMode>
);
