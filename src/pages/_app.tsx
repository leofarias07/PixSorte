import { ChakraProvider } from '@chakra-ui/react';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
