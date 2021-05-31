import React, { useContext } from 'react'
import { ThemesContext } from '../../contexts/ThemeContext'
import { Container, WrapperContainer, Title, ImgText, CardPokemons, Total, Error } from './styles'

const Purchased = ({store}) =>{
    const { actualTheme } = useContext(ThemesContext)
    console.log(actualTheme)
    const purchasedPokemons = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${actualTheme.title}`)) || []

    const renderPurchasedItems = () =>{
        if(purchasedPokemons.length < 1){
            return <Error key={1}>Você não tem itens comprados nesta loja</Error>
        }
        return purchasedPokemons.map(pokemon =>{
            return (
                <WrapperContainer key={pokemon.idPokemon}>
                    <Title>
                        <span>Pedido de {pokemon.date}</span>
                        <span>Cashback de R$ {pokemon.discount}</span>
                    </Title>
                    {renderPokemons(pokemon.pokemons)}
                    <Total>Total R$ {pokemon.price}</Total>
                </WrapperContainer>
            )
        });
    }

    const renderPokemons = (pokemons) =>{
        return pokemons.map(pokemon =>{
            return (
                <CardPokemons key={pokemon.idPokemon}>
                    <ImgText>
                        <img src={pokemon.photo} alt={pokemon.name}/>
                        <span>{pokemon.name}</span>
                    </ImgText>
                    <span></span>
                    <span>{pokemon.qtd} x {pokemon.price}</span>
                </CardPokemons>
            )
        })
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