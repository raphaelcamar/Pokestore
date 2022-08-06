import React from 'react';
import { ButtonStyle } from './styles';

const Button = ({ event, children }) => (
  <ButtonStyle
    onClick={() => {
      event();
    }}
  >
    {children}
  </ButtonStyle>
);

export default Button;
