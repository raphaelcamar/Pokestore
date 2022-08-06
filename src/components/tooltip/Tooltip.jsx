import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { catchSVG } from '../../helpers/Helpers';

const Tooltip = ({ click }) => {
  const cart = useSelector(state => state);

  return (
    <Container
      onClick={() => {
        click();
      }}
    >
      <div className="qtd">{cart.cart.length}</div>
      {catchSVG('cart')}
    </Container>
  );
};

export default Tooltip;
