import React, { useContext } from 'react';
import { ThemesContext } from '../../contexts/ThemeContext';
import { Container, WrapperContainer, Title, ImgText, CardPokemons, Total, Error } from './styles';
import {makeid} from '../../helpers/Helpers'

const Purchased = (props) =>{
    const { actualTheme } = useContext(ThemesContext)
    const purchasedPokemons = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${actualTheme.title}`)) || []

    const renderPurchasedItems = () =>{
        if(purchasedPokemons.length < 1){
            return <Error key={1}>Você não tem itens comprados nesta loja</Error>
        }
        return purchasedPokemons.map((pokemon, index) =>{
            return (
                <WrapperContainer key={makeid(index)}>
                    <Title>
                        <span>Pedido de {pokemon.date}</span>
                        <span>Cashback de R$ {pokemon.discount}</span>
                    </Title>
                    {renderPokemons(pokemon.pokemons)}
                    <Total>Total R$ {pokemon.price}</Total>
                </WrapperContainer>
            )
        })
    }

    const renderPokemons = (pokemons) =>{
        return pokemons.map((pokemon) =>(
            
            <CardPokemons key={makeid(pokemon.idPokemon)}>
                <ImgText>
                    <img src={pokemon.photo} alt={pokemon.name}/>
                    <span>{pokemon.name}</span>
                </ImgText>
                <span></span>
                <span>{pokemon.qtd} x {pokemon.price}</span>
            </CardPokemons>
        ))
    }

    return (
        <>
            <Container>
                {renderPurchasedItems()}           
            </Container>
        </>
    )
}

export default Purchased;