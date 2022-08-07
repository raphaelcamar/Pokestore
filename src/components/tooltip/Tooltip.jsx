import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { Icon } from '../atoms';

const Tooltip = ({ click }) => {
  const cart = useSelector(state => state);

  return (
    <Container
      onClick={() => {
        click();
      }}
    >
      <div className="qtd">{cart.cart.length}</div>
      <Icon icon="cart" />
    </Container>
  );
};

export default Tooltip;
