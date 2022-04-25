import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer, Zoom } from 'react-toastify';
import { AuthProvider } from '../contexts/AuthContext';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';
import theme from '../styles/theme';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SideBarDrawerProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer transition={Zoom} />
        </AuthProvider>
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
