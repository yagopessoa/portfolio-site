import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import Home from './Components/Home/Home';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.color.background};
  }
  body {
    color: ${({ theme }) => theme.color.body};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
