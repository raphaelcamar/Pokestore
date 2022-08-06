import { createContext, useContext } from 'react';
import { AvailableThemes } from '@/contexts/themes';
import { Theme } from '@/styles/styled';

export type ThemeContextProps = {
  changeTheme: (theme: AvailableThemes) => void;
  currentTheme: () => Theme.Base;
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext);
