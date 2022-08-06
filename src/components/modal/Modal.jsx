import React from 'react';
import Button from '../button/Button';
import { Container, Spacing } from './styles';

const ModalItem = ({ click }) => {
  const close = () => {
    click();
  };

  return (
    <Container>
      <Spacing>
        <h2 id="simple-modal-title">Compra realizada!</h2>
        <p id="simple-modal-description">Sua compra poderá ser visualizada na aba 'Minhas Compras'</p>
        <Button event={close}>Fechar</Button>
      </Spacing>
    </Container>
  );
};

export default ModalItem;
