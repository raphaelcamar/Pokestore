import React, { useEffect, useState } from 'react';
import CardCart from '../card-cart/CardCart';
// import './cart.css';
import {useSelector} from 'react-redux';
import {clear, removePokemon, qtdPokemon, } from '../../store/cart/actions/index';
import {useDispatch} from 'react-redux';
import {Container, HeaderCart, Title, Span, Spacing, Svg, Message, TotalPrice, ButtonCart, Width } from './styles'

const Cart = props => {

    const cart = useSelector((state) => state)
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0)

    const clearCart = () =>{
        const type = cart[0].type
        dispatch(clear(type))
    }

    const addPrice = (price) =>{
        setPrice(price)
    }
    
    const remove = (idPokemon) =>{
        dispatch(removePokemon(idPokemon))
    }
    const changeAmount = (value, idPokemon) =>{
        if(value < 1) value = 1
        dispatch(qtdPokemon(idPokemon, value))
    }

    const calcTotalPrice = () =>{
        let total = 0
        cart.forEach(item =>{ total += +item.currentPrice})
        return total.toFixed(2)
    }

    const buy = () =>{
        sessionStorage.setItem(`@purchased-${cart[0].type}`, JSON.stringify(cart));
    }

    useEffect(() =>{
        addPrice()
    }, [price])

    const renderCart = () =>{

        if(!cart || cart.length === 0){

            return (
                <Message>Você não possui itens no seu carrinho!</Message>
            )
        }else{
            return (
                <>
                    {cart.map(pokemon => {
                        return <CardCart pokemon={pokemon} key={pokemon.idPokemon} changeAmount={changeAmount} remove={remove}/>})}
                    <TotalPrice>
                        <span>Total</span>
                        <span>R$ {calcTotalPrice()}</span>
                    </TotalPrice>
                    <ButtonCart onClick={() =>{buy()}}>Comprar</ButtonCart>
                </>
            )
        }
    }
    return (
        <Container> 
           <Spacing>
                <HeaderCart>
                <Title>
                    <Svg width="22.887" height="20.344" viewBox="0 0 22.887 20.344"><path d="M20.985,11.973l1.878-8.265a.954.954,0,0,0-.93-1.165H6.326L5.962.763A.954.954,0,0,0,5.028,0H.954A.954.954,0,0,0,0,.954v.636a.954.954,0,0,0,.954.954H3.73L6.522,16.189a2.225,2.225,0,1,0,2.664.34h8.33a2.225,2.225,0,1,0,2.527-.413l.219-.965a.954.954,0,0,0-.93-1.165H8.667l-.26-1.272H20.055A.954.954,0,0,0,20.985,11.973Z" fill="#616161"/></Svg>
                    <span>Carrinho</span>
                </Title>
                <Span className="clean" onClick={clearCart}>Esvaziar carrinho</Span>
                </HeaderCart>
                <>
                    {renderCart()}
                </>
           </Spacing>
        </Container>
    )
}
export default Cart;