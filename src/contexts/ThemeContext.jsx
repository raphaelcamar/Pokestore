import {createContext, useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import fire from '../styles/themes/fire';
import water from '../styles/themes/water';
import bug from '../styles/themes/bug';
import poison from '../styles/themes/poison';
import { useDispatch } from 'react-redux';
import { changeContext } from '../store/cart/actions/cartActions'


export const ThemesContext = createContext({});

export function ThemesProvider(props){

  const themes = {
    fire,
    water,
    bug,
    poison
  }

  const dispatch = useDispatch();

  const { children } = props

  const [vectorThemes, setVectorThemes] = useState(Object.keys(themes));
  const [actualTheme, setActualTheme] = useState(themes.fire);

  useEffect(() =>{
    setActualTheme(JSON.parse(sessionStorage.getItem('@theme')) || fire)
  }, [])

  const changeTheme = (theme) =>{
    
    const newThemes = vectorThemes.filter(themes => theme !== themes);
    newThemes.unshift(theme);
    setVectorThemes(newThemes);
    setActualTheme(themes[theme]);
    dispatch(changeContext(theme))
  }

  const returnThemes = () =>{
    return themes
  }

  return (
   <ThemeProvider theme={actualTheme}>
     <GlobalStyle />
      <ThemesContext.Provider value={{
      changeTheme,
      returnThemes,
      vectorThemes,
      actualTheme
    }}>
      {children}
    </ThemesContext.Provider>
   </ThemeProvider>
  )


}