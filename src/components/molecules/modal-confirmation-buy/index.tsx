import { Container, Spacing } from './styles';
import { Button } from '@/components/atoms';

interface IModalConfirmationBuy {
  click: () => void;
}
export const ModalConfirmationBuy: React.FC<IModalConfirmationBuy> = ({ click }) => (
  <Container>
    <Spacing>
      <h2>Compra realizada!</h2>
      <p>Sua compra poderá ser visualizada na aba 'Minhas Compras'</p>
      <Button onClick={() => click()}>Fechar</Button>
    </Spacing>
  </Container>
);
