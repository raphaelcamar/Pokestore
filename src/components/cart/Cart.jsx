import React, {useState } from 'react';
import CardCart from '../card-cart/CardCart';
import {useSelector} from 'react-redux';
import {clear, buyPokemons } from '../../store/cart/actions/actions';
import {useDispatch} from 'react-redux';
import {Container, HeaderCart, Span, Spacing, Message, TotalPrice, ModalBuy} from './styles'
import {getDate, getHours, calcCashBack, catchSVG} from '../../helpers/Helpers'
import ModalItem from '../modal/Modal';
import Button from '../button/Button';

const Cart = _ => {

    const cart = useSelector((state) => state)
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)

    const clearCart = () =>{
        const type = cart[0].type
        dispatch(clear(type))
    }

    if(modal){
        document.querySelector('body').style.overflow = 'hidden';
    }else{
        document.querySelector('body').style.overflow = 'auto';

    }

    const calcTotalPrice = () =>{
        let total = 0
        cart.forEach(item =>{ total += +item.currentPrice});
        return total.toFixed(2)
    }

    const buy = () =>{
        const price = calcTotalPrice();
        dispatch(buyPokemons({
            pokemons : [...cart], 
            price,
            discount : calcCashBack(price),
            date : getDate(),
            hour : getHours()
        }));
        clearCart();
        setModal(true);
    }

    const handleClose = () =>{
        setModal(false)
    }

    const emptyCart = () =>{
        if(cart.length > 0){
            return <Span className="clean" onClick={clearCart}>Esvaziar carrinho</Span>
        }
    }

    const renderCart = () =>{

        if(!cart || cart.length === 0){

            return ( <Message>Você não possui itens no seu carrinho!</Message> )
        }else{
            return (
                <>
                    {cart.map(pokemon => {
                        return <CardCart pokemon={pokemon} key={pokemon.idPokemon}/>})}
                    <TotalPrice>
                        <span>Total</span>
                        <span>R$ {calcTotalPrice()}</span>
                    </TotalPrice>
                    <Button event={() =>{buy()}}>Comprar</Button>
                </>
            )
        }
    }
    return (
        <Container> 
            {modal && (
                <ModalBuy>
                    <ModalItem click={handleClose}></ModalItem>
                </ModalBuy>
            )}
           <Spacing>
                <HeaderCart>
                <div>
                    {catchSVG('cart')}
                    <span>Carrinho</span>
                </div>
                {emptyCart()}
                </HeaderCart>   
                <>
                {renderCart()}
                </>
           </Spacing>
        </Container>
    )
}
export default Cart;