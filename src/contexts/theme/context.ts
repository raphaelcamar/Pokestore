import { createContext, useContext } from 'react';
import { Theme } from '@/styles/styled';
import { AvailableThemes } from '@/contexts/themes';

export type ThemeContextProps = {
  changeTheme: (theme: AvailableThemes) => void;
  currentTheme: Theme.Base;
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext);
