import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.verdeEscuro};
    font: 400 16px Inter, sans-serif;
  }

`;
