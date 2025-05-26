import React, { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { darkTheme } from '../styles/theme'; 

// contexto pra passar o tema pela aplicação
export const ThemeContext = createContext(darkTheme);

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={darkTheme}>
      <StyledThemeProvider theme={darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
