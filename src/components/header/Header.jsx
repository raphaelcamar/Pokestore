import React from 'react';
import { Container} from './styles';
import { Link, useLocation} from "react-router-dom";
import Menu from '../menu/Menu';

const Header = ({catchStore}) => {
    
    const path = useLocation().pathname

    const click = (type) =>{
        catchStore(type);
    }

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
              <Menu click={click}></Menu>
          
           </div>
            <span>{optionLink()}</span>
        </Container>
    )
}

export default Header;