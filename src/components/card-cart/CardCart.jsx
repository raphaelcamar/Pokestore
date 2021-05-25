import React from 'react';
import { Container, WrapperCard, Infos, SpanQtd, Remove } from './styles';
import { connect } from 'react-redux';
import { removePokemon, qtdPokemon } from '../../store/cart/actions/cartActions';
import { bindActionCreators } from 'redux';

const CardCart = ({pokemon, qtdPokemon, removePokemon}) => {


    const { photo, name, currentPrice, qtd } = pokemon;

    const remove = () =>{
        removePokemon(pokemon);
    }

    const changeAmount = (value) =>{
        if(value < 1) value = 1;
        qtdPokemon(pokemon.idPokemon, value);
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

const mapStateToProps = (state) => ({cart: state.cart});
const mapDispatchToProps = dispatch => bindActionCreators({removePokemon, qtdPokemon}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardCart);