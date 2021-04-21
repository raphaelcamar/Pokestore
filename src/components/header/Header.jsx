import React, {useContext} from 'react';
// import './header.css';
import {useSelector} from 'react-redux';
import { Container, HeaderCart } from './styles';


//Pega o tema atual com as cores
// import {ThemeContext} from 'styled-components'
// const {colors} = useContext(ThemeContext)


const Header = props => {

    const cart = useSelector((state) => state)

    const {catchStore} = props

    const click = (type) =>{
        catchStore(type)
    }

    return (
        <Container>
           <div>
           <h3 onClick={() => {click('fire')}}> Pokemón Fogo</h3>
           <h3 onClick={() =>{click('water')}}> Pokemón Água</h3>
           </div>
            <HeaderCart>
                <div className="qtd">{cart.length}</div>
                <svg onClick={() =>{}} xmlns="http://www.w3.org/2000/svg" width="22.887" height="20.344" viewBox="0 0 22.887 20.344"><path d="M20.985,11.973l1.878-8.265a.954.954,0,0,0-.93-1.165H6.326L5.962.763A.954.954,0,0,0,5.028,0H.954A.954.954,0,0,0,0,.954v.636a.954.954,0,0,0,.954.954H3.73L6.522,16.189a2.225,2.225,0,1,0,2.664.34h8.33a2.225,2.225,0,1,0,2.527-.413l.219-.965a.954.954,0,0,0-.93-1.165H8.667l-.26-1.272H20.055A.954.954,0,0,0,20.985,11.973Z" fill="#ffffff"/></svg>
            </HeaderCart>
        </Container>
    )
}

export default Header;