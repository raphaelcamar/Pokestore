import React, { useContext, useState } from 'react';
import Loader from 'react-loader-spinner';
import { Container, Cards, WrapperLoader } from './styles';
import Input from '../input/Input';
import Card from '../card/Card';
import usePokemonTypeSearch from '../../customHooks/usePokemonTypeSearch';
import usePokemonsFetch from '../../customHooks/usePokemonsFetch';
import { ThemesContext } from '../../contexts/ThemeContext';
import { useThemeContext } from '@/contexts/theme';

const MainContent = () => {
  const { currentTheme } = useThemeContext();
  const { error, urlPokemons } = usePokemonTypeSearch(currentTheme.title);

  const { filter, statePokemons, loadingPokemons, pokemonsToFetch, fetchNewPage } = usePokemonsFetch(
    urlPokemons,
    currentTheme.title
  );

  const [paginate, setPaginate] = useState({ initial: 0, offset: 12 });

  const fetchMore = () => {
    const { initial, offset } = paginate;
    setPaginate({
      initial: offset,
      offset: offset + 12,
    });
    fetchNewPage(initial, offset);
  };

  const renderCards = () => {
    if (error) {
      return <div className="error">Aconteceu alguma coisa. Tente novamente mais tarde</div>;
    }

    return statePokemons.map((pokemon, i) => <Card key={i} item={pokemon} />);
  };

  const renderUpdate = () => {
    if (loadingPokemons) {
      return (
        <WrapperLoader>
          <Loader type="Puff" color={currentTheme.main} height={100} width={100} />
        </WrapperLoader>
      );
    }
  };

  const searchPokemon = inputText => {
    setPaginate({
      initial: 0,
      offset: 12,
    });
    const pokemonsFiltered = urlPokemons.filter(
      pokemon => pokemon.pokemon.name.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
    filter(pokemonsFiltered);
  };

  const renderButtonUpdate = () => {
    const { offset } = paginate;
    if (offset - 12 < pokemonsToFetch.length) {
      return <button onClick={fetchMore}>Atualizar</button>;
    }
  };

  return (
    <Container>
      <Input
        placeholder="Ex: Pikachu"
        label="Pesquise um pokemón"
        searchPokemon={searchPokemon}
        labelButton="Pesquisar"
      />
      <Cards>{renderCards()}</Cards>
      {renderUpdate()}
      <div className="btn-load">{renderButtonUpdate()}</div>
    </Container>
  );
};

export default MainContent;
