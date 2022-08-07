import { useSelector } from 'react-redux';
import { Icon } from '@/components/atoms';
import { Container } from './styles';

interface ICartCounter {
  click: () => void;
}
export const CartCounter: React.FC<ICartCounter> = ({ click }) => {
  const cart = useSelector(state => state) as any; // TODO

  return (
    <Container onClick={() => click()}>
      <div>{cart.cart.length}</div>
      <Icon icon="cart" />
    </Container>
  );
};
