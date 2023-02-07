import { ColorModeScript,ChakraProvider,theme} from '@chakra-ui/react';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeSwitcher from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
  <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;