import React from 'react';
// import Cart from '../cart/Cart';
import './cardCart.css';
import {Container, WrapperCard, Infos, SpanQtd, Remove } from './styles'

const CardCart = props => {

    const { pokemon } = props
    const { photo, name, currentPrice, qtd } = pokemon

    return (
        <Container>
            <WrapperCard>
                <Infos>
                    <img src={photo} alt="foto-do-item-escolhido"/>
                    <span className="name">{name}</span>
                </Infos>
                <span className="price">R$ {currentPrice}</span>
            </WrapperCard>
            <WrapperCard>
                <SpanQtd>
                    <span>Qtde</span>
                    <input type="number" min='1' max='999' value={qtd} onChange={input => props.changeAmount && props.changeAmount(input.target.value, pokemon.idPokemon)}/>
                </SpanQtd>
                <Remove onClick={_ => props.remove && props.remove(props.remove(pokemon.idPokemon))}>Remover</Remove>
            </WrapperCard>
        </Container>
    )
}

export default CardCart;