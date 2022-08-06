import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';
import Menu from '../menu/Menu';

const Header = () => {
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
        <Menu />
      </div>
      <span>{optionLink()}</span>
    </Container>
  );
};

export default Header;
