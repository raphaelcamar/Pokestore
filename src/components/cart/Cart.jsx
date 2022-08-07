/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardCart from '../card-cart/CardCart';
import { buy, clear } from '@/store/cart/actions';
import { Container, HeaderCart, Span, Spacing, Message, TotalPrice, ModalBuy } from './styles';
import { getDate, getHours, calcCashBack } from '../../helpers/Helpers';
import { Button, Icon } from '@/components/atoms';
import { useThemeContext } from '@/contexts/theme';
import { ModalConfirmationBuy } from '@/components/molecules';

const Cart = ({ buy, cart, clear }) => {
  const [modal, setModal] = useState(false);
  const cartRef = useRef();
  const { currentTheme } = useThemeContext();

  const clearCart = () => {
    clear(currentTheme.title);
  };

  if (modal) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'auto';
  }

  const calcTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += +item.currentPrice;
    });
    return total.toFixed(2);
  };

  const buyPokemons = () => {
    const price = calcTotalPrice();
    buy({
      pokemons: [...cart],
      price,
      discount: calcCashBack(price),
      date: getDate(),
      hour: getHours(),
    });
    clearCart();
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const emptyCart = () => {
    if (cart.length > 0) {
      return (
        <Span className="clean" onClick={clearCart}>
          Esvaziar carrinho
        </Span>
      );
    }
  };

  const renderCart = () => {
    if (!cart || cart.length === 0) {
      return <Message>Você não possui itens no seu carrinho!</Message>;
    }
    return (
      <>
        {cart.map(pokemon => (
          <CardCart pokemon={pokemon} key={pokemon.idPokemon} />
        ))}
        <TotalPrice>
          <span>Total</span>
          <span>R$ {calcTotalPrice()}</span>
        </TotalPrice>
        <Button onClick={() => buyPokemons()}>Comprar</Button>
      </>
    );
  };

  return (
    <Container ref={cartRef}>
      {modal && (
        <ModalBuy>
          <ModalConfirmationBuy click={handleClose} />
        </ModalBuy>
      )}
      <Spacing>
        <HeaderCart>
          <div>
            <Icon icon="cart" />
            <span>Carrinho</span>
          </div>
          {emptyCart()}
        </HeaderCart>
        <>{renderCart()}</>
      </Spacing>
    </Container>
  );
};
const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = dispatch => bindActionCreators({ clear, buy }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
