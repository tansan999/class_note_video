import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles, { lightTheme, darkTheme } from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <ThemeContext.Consumer>
        {({ dark }) => (
          <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <App />
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </AuthProvider>
  </ThemeProvider>
);
