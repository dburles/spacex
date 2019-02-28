import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  iframe {
    border: 0;
  }
  body {
    font-family: sans-serif;
    line-height: 1.5;
    background: ${props => props.theme.colors.grey[8]};
  }
  a {
    color: ${props => props.theme.colors.grey[9]};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  body, form {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
