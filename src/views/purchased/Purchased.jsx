import React from 'react';
import { Container, WrapperContainer, Title, ImgText, CardPokemons, Total, Error } from './styles';
import { makeid } from '../../helpers/Helpers';
import { useThemeContext } from '@/contexts/theme';

const Purchased = props => {
  const { currentTheme } = useThemeContext();
  const purchasedPokemons = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${currentTheme.title}`)) || [];

  const renderPokemons = pokemons =>
    pokemons.map(pokemon => (
      <CardPokemons key={makeid(pokemon.idPokemon)}>
        <ImgText>
          <img src={pokemon.photo} alt={pokemon.name} />
          <span>{pokemon.name}</span>
        </ImgText>
        <span />
        <span>
          {pokemon.qtd} x {pokemon.price}
        </span>
      </CardPokemons>
    ));

  const renderPurchasedItems = () => {
    if (purchasedPokemons.length < 1) {
      return <Error key={1}>Você não tem itens comprados nesta loja</Error>;
    }
    return purchasedPokemons.map((pokemon, index) => (
      <WrapperContainer key={makeid(index)}>
        <Title>
          <span>Pedido de {pokemon.date}</span>
          <span>Cashback de R$ {pokemon.discount}</span>
        </Title>
        {renderPokemons(pokemon.pokemons)}
        <Total>Total R$ {pokemon.price}</Total>
      </WrapperContainer>
    ));
  };

  return (
    <>
      <Container>{renderPurchasedItems()}</Container>
    </>
  );
};

export default Purchased;
