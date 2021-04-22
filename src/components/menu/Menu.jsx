import React, { useState } from 'react';
import { catchSVG } from '../../helpers/Helpers';
import {ContainerSelected} from './styles'

const Menu = ({click}) =>{

  const [open, setOpen] = useState('close');
  const [bool, setBool] = useState(false);
  const theme = JSON.parse(sessionStorage.getItem('@theme')).title;
  const [store, setStore] = useState(theme);

  const openTab = (valor) =>{
    const v = !valor
    if(v) setOpen('open')
    if(!v) setOpen('close')
    setBool(v);
  }



  const setFire = () =>{
    return (
      <ContainerSelected>
        <div className={`container container-${open}`} onClick={() =>{openTab(bool)}}>
            <div className="description">
              {catchSVG('fire')}
              <span>Loja de fogo</span>
              </div>  
        </div>
        <div className={`options ${open}`}>
          <div className="option" onClick={() => {
                setStore('water')
                click('water')
                
                }}>
              {catchSVG('water')}
              <span>Loja de água</span>
          </div>
        </div>
      </ContainerSelected>
    )
  }
  
  const setWater = () =>{
    return (
      <ContainerSelected>
        <div className={`container container-${open}`} onClick={() =>{openTab(bool)}}>
            <div className="description">
              {catchSVG('water')}
              <span>Loja de Água</span>
              </div>  
        </div>
        <div className={`options ${open}`}>
          <div className="option" onClick={() =>{
                setStore('fire')
                click('fire')
                }}>
              {catchSVG('fire')}
              <span >Loja de fogo</span>
          </div>
        </div>
      </ContainerSelected>
    )
  }

  const setType = () =>{
    if(store === 'fire') return setFire();
    if(store === 'water') return setWater();
  }
  return(
    <>
    {setType()}
    </>
  )
}

export default Menu;