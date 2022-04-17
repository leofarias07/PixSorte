import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../contexts/AuthContext';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SideBarDrawerProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
