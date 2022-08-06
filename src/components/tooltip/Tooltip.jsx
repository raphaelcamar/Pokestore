import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { catchSVG } from '../../helpers/Helpers';
import { useThemeContext } from '@/contexts/theme';

const Tooltip = ({ click }) => {
  const cart = useSelector(state => state);
  const { currentTheme } = useThemeContext();

  console.log(currentTheme);

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
