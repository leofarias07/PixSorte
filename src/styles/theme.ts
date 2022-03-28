import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    Green: {
      'Green 50': '#F0FFF4',
      'Green 100': '#C6F6D5',
      'Green 200': '  #9AE6B4',
      'Green 300': ' #68D391',
      'Green 400': '#48BB78',

      'Green 500': '#38A169',
      'Green 600': '  #2F855A',
      'Green 700': ' #276749',
      'Green 800': ' #22543D',
      'Green 900': '#1C4532'
    },
    amarelo: {
      amarelo: '#f7fc09'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'green.900',
        color: 'black'
      }
    }
  }
});

export default theme;
