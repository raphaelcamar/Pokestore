import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catchSVG } from '../../helpers/Helpers';
import { changeContext } from '../../store/cart/actions/cartActions';
import {ContainerSelected} from './styles';

const Menu = (props) =>{
    const { click, changeContext } = props
    const [open, setOpen] = useState('close');
    const [bool, setBool] = useState(false);
    const theme = JSON.parse(sessionStorage.getItem('@theme')).title;
    const THEMES = ['fire','water','bug','poison'];


    const openTab = (valor) =>{
    const v = !valor;
    if(v) setOpen('open');
    if(!v) setOpen('close');
    setBool(v);
  }

    const newThemes = THEMES.filter(themes => theme !== themes);
    newThemes.unshift(theme);
    const [themes, setThemes] = useState(newThemes);

    const newTheme = (store) =>{
      const arr = themes.filter(theme => store !== theme);
      arr.unshift(store);
      setThemes(arr);
      const [theme] = arr;
      changeContext(theme);
      document.getElementById('favicon').href = `./${theme}.svg`;
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

const mapStateToProps = state => ({store: state});
const mapDispatchToProps = dispatch => bindActionCreators({changeContext}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);