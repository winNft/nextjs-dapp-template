import '@fontsource/comfortaa/300.css';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/500.css';
import '@fontsource/comfortaa/600.css';
import '@fontsource/comfortaa/700.css';


import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';
import { theme } from '../config/chakraTheme';




const NextJSDappTemplate = ({ Component, pageProps }: AppProps) => {
  useElrondNetworkSync();
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default NextJSDappTemplate;
