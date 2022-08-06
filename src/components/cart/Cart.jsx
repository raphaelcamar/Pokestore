import React, { useContext, useRef, useState } from 'react';
import { connect } from 'react-redux';
import CardCart from '../card-cart/CardCart';
import { clear, buyPokemons } from '../../store/cart/actions/cartActions';
import { Container, HeaderCart, Span, Spacing, Message, TotalPrice, ModalBuy } from './styles';
import { getDate, getHours, calcCashBack, catchSVG } from '../../helpers/Helpers';
import ModalItem from '../modal/Modal';
import Button from '../button/Button';
import { bindActionCreators } from 'redux';
import { ThemesContext } from '../../contexts/ThemeContext';

const Cart = ({ buyPokemons, cart, clear }) => {
  const [modal, setModal] = useState(false);
  const cartRef = useRef();
  const { actualTheme } = useContext(ThemesContext);

  const clearCart = () => {
    clear(actualTheme.title);
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

  const buy = () => {
    const price = calcTotalPrice();
    buyPokemons({
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
    } else {
      return (
        <>
          {cart.map(pokemon => <CardCart pokemon={pokemon} key={pokemon.idPokemon}/>)}
          })}
          <TotalPrice>
            <span>Total</span>
            <span>R$ {calcTotalPrice()}</span>
          </TotalPrice>
          <Button
            event={() => {
              buy();
            }}
          >
            Comprar
          </Button>
        </>
      );
    }
  };

  return (
    <Container ref={cartRef}>
      {modal && (
        <ModalBuy>
          <ModalItem click={handleClose} />
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
        <>{renderCart()}</>
      </Spacing>
    </Container>
  );
};
const mapStateToProps = state => ({ cart: state.cart });
const mapDispatchToProps = dispatch => bindActionCreators({ clear, buyPokemons }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
