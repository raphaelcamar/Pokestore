import React from 'react';
import { Container} from './styles';
import { Link, useLocation} from "react-router-dom";
import Menu from '../menu/Menu';

const Header = () => {
    
    const path = useLocation().pathname

    const optionLink = () =>{

        if(path.indexOf('/infos/purchased') > -1){
           return <Link to="/">Voltar para loja</Link>
        }else{
        return <Link to="/infos/purchased">Visualizar pedidos</Link>
        }
    }

    return (
        <Container>
           <div>
              <Menu></Menu>
          
           </div>
            <span>{optionLink()}</span>
        </Container>
    )
}

export default Header;