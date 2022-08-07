import { Link, useLocation } from 'react-router-dom';
import { MenuHeader } from '@/components/molecules';
import { Container } from './styles';

export const Header: React.FC = () => {
  const path = useLocation().pathname;

  const optionLink = () => {
    if (path.indexOf('/infos/purchased') > -1) {
      return <Link to="/">Voltar para loja</Link>;
    }
    return <Link to="/infos/purchased">Visualizar pedidos</Link>;
  };

  return (
    <Container>
      <div>
        <MenuHeader />
      </div>
      <span>{optionLink()}</span>
    </Container>
  );
};
