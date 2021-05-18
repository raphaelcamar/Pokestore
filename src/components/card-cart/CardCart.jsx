import React from 'react';
import {Container, WrapperCard, Infos, SpanQtd, Remove } from './styles';
import {useDispatch} from 'react-redux';
import {removePokemon, qtdPokemon} from '../../store/cart/actions/actions';

const CardCart = ({pokemon}) => {

    const dispatch = useDispatch();

    const { photo, name, currentPrice, qtd } = pokemon

    const remove = () =>{
        dispatch(removePokemon(pokemon))
    }

    const changeAmount = (value) =>{
        if(value < 1) value = 1;
        dispatch(qtdPokemon(pokemon.idPokemon, value));
    }

    return (
        <Container>
            <WrapperCard>
                <Infos>
                    <img src={photo} alt={name}/>
                    <span className="name">{name}</span>
                </Infos>
                <span className="price">R$ {currentPrice}</span>
            </WrapperCard>
            <WrapperCard>
                <SpanQtd>
                    <span>Qtde</span>
                    <input type="number" min='1' max='999' value={qtd} onChange={input => {changeAmount(input.target.value)}}/>
                </SpanQtd>
                <Remove onClick={() =>{remove()}}>Remover</Remove>
            </WrapperCard>
        </Container>
    )
}

export default CardCart;