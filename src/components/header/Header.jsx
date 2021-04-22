import React, {useContext, useState} from 'react';
// import './header.css';
import {useSelector} from 'react-redux';
import { Container, HeaderCart } from './styles';
import { Link, useLocation} from "react-router-dom";
import {catchSVG} from '../../helpers/Helpers';
import CustomizedMenus from '../menu/Menu'


//Pega o tema atual com as cores
// import {ThemeContext} from 'styled-components'
// const {colors} = useContext(ThemeContext)


const Header = props => {

  
    const path = useLocation().pathname
    const [cartHandler, setCartHandler] = useState(false);

    const {catchStore, showCart} = props

    const click = (type) =>{
        catchStore(type);
    }

    const optionLink = () =>{
       if(path.indexOf('/infos/purchased') > -1){
           return <Link to="/">Voltar para loja</Link>
       }else{
        return <Link to="/infos/purchased">Visualizar pedidos</Link>
       }
    }

    return (
        <Container>
           <div>
              <CustomizedMenus click={click}></CustomizedMenus>
          
           </div>
            <span>{optionLink()}</span>
        </Container>
    )
}

export default Header;
{/* <h3 onClick={() => {click('fire')}}> Pokemón Fogo</h3>
<h3 onClick={() =>{click('water')}}> Pokemón Água</h3> */}