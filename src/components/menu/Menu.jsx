import React, { useState } from 'react';
import { catchSVG } from '../../helpers/Helpers';
import {ContainerSelected} from './styles';

const Menu = ({click}) =>{

    const [open, setOpen] = useState('close');
    const [bool, setBool] = useState(false);
    const theme = JSON.parse(sessionStorage.getItem('@theme')).title;
    const THEMES = ['fire','water','bug','poison'];


    const openTab = (valor) =>{
    const v = !valor
    if(v) setOpen('open');
    if(!v) setOpen('close');
    setBool(v);
  }

    const newThemes = THEMES.filter(themes => theme !== themes);
    newThemes.unshift(theme);
    const [themes, setThemes] = useState(newThemes)

    const newTheme = (store) =>{
      const arr = themes.filter(theme => store !== theme);
      arr.unshift(store);
      setThemes(arr);
    }

    const generate = () =>{
        return (
           <ContainerSelected>
            <div className={`container container-${open}`} onClick={() =>{openTab(bool)}}>
                <div className="description">
                    {catchSVG(themes[0])}
                    <span>{`${themes[0]} store`}</span>
                </div>  
            </div>
            <div className={`options ${open}`}>
            {themes.map((theme, i) =>{
              if(i === 0)return ''
                
                return (

                    <div key={theme.toString()} className="option" onClick={() =>{
                          newTheme(theme);
                          click(theme)
                          }}>
                      <span>{catchSVG(theme)}{`${theme} store`}</span>
                    </div>
                )
            })}
            </div>
           </ContainerSelected>
        )
    }

    return (
      <>
      {generate()}
      </>
    )

}

export default Menu;