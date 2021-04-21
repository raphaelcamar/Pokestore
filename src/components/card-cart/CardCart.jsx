import React from 'react';
// import Cart from '../cart/Cart';
import './cardCart.css';
import {} from './styles'

const CardCart = props => {

    
    const { pokemon } = props
    const { photo, name, currentPrice, qtd } = pokemon
    return (
        <aside className="CartCard">
            <div className="container-cartCard">
                <div className="infos">
                    <img src={photo} alt="foto-do-item-escolhido"/>
                    <div className="name">{name}</div>
                </div>
                <span className="price">R$ {currentPrice}</span>
            </div>
            <div className="container-cartCard">
                <div className="qtd">
                    <span>Qtde</span>
                    <input type="number" min='1' max='999' value={qtd} onChange={input => props.changeAmount && props.changeAmount(input.target.value, pokemon.idPokemon)}/>
                </div>
                <span className="remove" onClick={_ => props.remove && props.remove(props.remove(pokemon.idPokemon))}>Remover</span>
            </div>
        </aside>
    )
}

export default CardCart;