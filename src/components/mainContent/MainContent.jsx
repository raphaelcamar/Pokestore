import React, { useContext } from 'react';
import {Container, Cards, WrapperLoader} from './styles';
import Input from '../input/Input';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';
import Card from '../card/Card';
import usePokemonTypeSearch from '../../customHooks/usePokemonTypeSearch';
import usePokemonsFetch from '../../customHooks/usePokemonsFetch';

const MainContent = (props) =>{

  const { colors } = useContext(ThemeContext);
  const {
    loading,
    error,
    urlPokemons
  } = usePokemonTypeSearch(props.theme);

  const {
    pokemonsFetched,
    loadingPokemons,
    updatePaginate
  } = usePokemonsFetch(urlPokemons, props.theme);

  const renderCards = () => {

    if(error){
      <p>Aconteceu alguma coisa. Tente novamente mais tarde</p>
    }
    return pokemonsFetched.map((pokemon, i) => {
      return (
        <Card key={i} item={pokemon} />
      )
    });
  }

  const renderUpdate = () => {
    if(loadingPokemons || loading){
      return (
        <WrapperLoader>
            <Loader type="Puff" color={colors.primary} height={100} width={100}/>
        </WrapperLoader>
      )
    }
  }

  return (
    <Container>
        <Input placeholder="Ex: Pikachu" label="Pesquise um pokemón" searchPokemon={() => {}}/>
        <Cards> 
          {renderCards()}
        </Cards>
        {renderUpdate()}
        <div className="btn-load">
        <button onClick={updatePaginate}>Atualizar</button>
        </div>
      </Container>
  )
}

export default MainContent;