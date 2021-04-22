// import React, { useState } from 'react';
// import { catchSVG } from '../../helpers/Helpers';
// import {ContainerSelected} from './styles'

// const Menu = ({click}) =>{

//   const [open, setOpen] = useState('close');
//   const [bool, setBool] = useState(false);
//   const [store, setStore] = useState(theme);
//   const theme = JSON.parse(sessionStorage.getItem('@theme')).title;

//   const openTab = (valor) =>{
//     const v = !valor
//     if(v) setOpen('open')
//     if(!v) setOpen('close')
//     setBool(v);
//   }

//   const setFire = () =>{
//     return (
//       <ContainerSelected>
//         <div className={`container container-${open}`} onClick={() =>{openTab(bool)}}>
//             <div className="description">
//               {catchSVG('fire')}
//               <span>Loja de fogo</span>
//               </div>  
//         </div>
//         <div className={`options ${open}`}>
//           <div className="option" onClick={() => {
//                 setStore('water')
//                 click('water')
                
//                 }}>
//               {catchSVG('water')}
//               <span>Loja de água</span>
//           </div>
//         </div>
//       </ContainerSelected>
//     )
//   }
  
//   const setWater = () =>{
//     return (
//       <ContainerSelected>
//         <div className={`container container-${open}`} onClick={() =>{openTab(bool)}}>
//             <div className="description">
//               {catchSVG('water')}
//               <span>Loja de Água</span>
//               </div>  
//         </div>
//         <div className={`options ${open}`}>
//           <div className="option" onClick={() =>{
//                 setStore('fire')
//                 click('fire')
//                 }}>
//               {catchSVG('fire')}
//               <span >Loja de fogo</span>
//           </div>
          
//         </div>
//       </ContainerSelected>
//     )
//   }

import React, { useState } from 'react';
import { catchSVG } from '../../helpers/Helpers';
import {ContainerSelected} from './styles';

const Menu = ({click}) =>{

    const [open, setOpen] = useState('close');
    const [bool, setBool] = useState(false);
    const theme = JSON.parse(sessionStorage.getItem('@theme')).title;
    const THEMES = [
      'fire',
      'water',
      'bug',
      'poison'
    ];


    const openTab = (valor) =>{
    const v = !valor
    if(v) setOpen('open')
    if(!v) setOpen('close')
    setBool(v);
  }

    const newArr = THEMES.filter(themes => theme !== themes);
    newArr.unshift(theme);
    const [themes, setThemes] = useState(newArr)

    const newItem = (store) =>{
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
                if(i == 0)return ''
                
                return (
                  <>
                    <div className="option" onClick={() =>{
                          newItem(theme);
                          click(theme)
                          }}>
                        {/* {catchSVG(theme)} */}
                      <span>{catchSVG(theme)}{`${theme} store`}</span>
                      </div>
                  </>
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