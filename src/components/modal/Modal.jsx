import React from 'react';
import { Button } from '@/components/atoms';
import { Container, Spacing } from './styles';

const ModalItem = ({ click }) => (
  <Container>
    <Spacing>
      <h2 id="simple-modal-title">Compra realizada!</h2>
      <p id="simple-modal-description">Sua compra poderá ser visualizada na aba 'Minhas Compras'</p>
      <Button onClick={() => click()}>Fechar</Button>
    </Spacing>
  </Container>
);

export default ModalItem;
