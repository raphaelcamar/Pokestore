import React, { useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, CartBody } from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Cart from '../../components/cart/Cart';
import { fetchLinkPokemons } from '../../store/pokemons/actions/pokemonActions';
import MainContent from '../../components/mainContent/MainContent';
import { useThemeContext } from '@/contexts/theme';

const Main = props => {
  const { showCart } = props;
  const { currentTheme } = useThemeContext();

  return (
    <Container>
      <MainContent theme={currentTheme.title} />
      <CartBody className={showCart ? 'show' : 'hide'}>
        <Cart />
      </CartBody>
    </Container>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchLinkPokemons }, dispatch);

export default connect(null, mapDispatchToProps)(Main);
