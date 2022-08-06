import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BugTheme, FireTheme, PoisonTheme, WaterTheme, GlobalStyle, AvailableThemes } from '@/contexts/themes';
import { Theme } from '@/styles/styled';

export const ThemesContext = createContext({});

export const StyledThemeProvider: React.FC = ({ children }) => {
  const themes = {
    fire: FireTheme,
    water: WaterTheme,
    bug: BugTheme,
    poison: PoisonTheme,
  };

  const [actualTheme, setActualTheme] = useState<Theme.Base>(themes.fire);

  useEffect(() => {
    setActualTheme(FireTheme);
  }, []);

  const changeTheme = (theme: AvailableThemes): void => {
    setActualTheme(themes[theme]);
  };

  const returnThemes = () => themes;

  return (
    <ThemeProvider theme={actualTheme}>
      <GlobalStyle />
      <ThemesContext.Provider
        value={{
          changeTheme,
          returnThemes,
          actualTheme,
        }}
      >
        {children}
      </ThemesContext.Provider>
    </ThemeProvider>
  );
};
