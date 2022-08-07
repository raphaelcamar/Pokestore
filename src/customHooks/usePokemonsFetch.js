import { useState, useEffect } from 'react';
import { createObjectPokemon } from '../helpers/Helpers';
import { getPokemons } from '@/api/api';

const usePokemonsFetch = (pokemons, type) => {
  const [statePokemons, setStatePokemons] = useState([]);
  const [loadingPokemons, setLoadingPokemons] = useState(true);
  const [pokemonsToFetch, setPokemonsToFetch] = useState(pokemons);

  useEffect(() => {
    setPokemonsToFetch(pokemons);
    const pokemonsSplitted = pokemons.slice(0, 12);

    const pokemonsFetched = getPokemons(pokemonsSplitted);

    pokemonsFetched.then(res => {
      const objPokemon = res.map(pokemon => createObjectPokemon(pokemon, type));

      setStatePokemons(objPokemon);
      setLoadingPokemons(false);
    });
  }, [pokemons]);

  const fetchNewPage = (initial, offset) => {
    setLoadingPokemons(true);
    const pokemonsSplitted = pokemonsToFetch.slice(initial, offset);
    const pokemonsFetched = getPokemons(pokemonsSplitted);

    pokemonsFetched.then(res => {
      const objPokemon = res.map(pokemon => createObjectPokemon(pokemon));

      setStatePokemons([...statePokemons, ...objPokemon]);
      setLoadingPokemons(false);
    });
  };

  const filter = pokemonsFiltered => {
    setLoadingPokemons(true);
    setStatePokemons([]);
    setPokemonsToFetch(pokemonsFiltered);
    const pokemonsSplitted = pokemonsFiltered.splice(0, 12);
    const pokemonsFetched = getPokemons(pokemonsSplitted);
    pokemonsFetched.then(res => {
      const objPokemon = res.map(pokemon => createObjectPokemon(pokemon, type));

      setStatePokemons(objPokemon);
      setLoadingPokemons(false);
    });
  };

  return {
    filter,
    statePokemons,
    pokemonsToFetch,
    loadingPokemons,
    fetchNewPage,
  };
};

export default usePokemonsFetch;
