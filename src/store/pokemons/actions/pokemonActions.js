import { fetchPokemonType, getPokemons } from '../../../api/Api';
import { createObjectPokemon } from '../../../helpers/Helpers';

export const fetchLinkPokemons = async type => {
  const urlPokemons = await fetchPokemonType(type);
  return {
    type: 'FETCH_POKEMONS',
    payload: {
      urlPokemons,
    },
  };
};

export const clear = () => ({
  type: 'CLEAR_STORE',
  payload: {
    pokedex: [],
  },
});

export const fetchPokemons = async (urlPokemons, type) => {
  const pokemons = await getPokemons(urlPokemons);
  const pokedex = pokemons.map(pokemon => createObjectPokemon(pokemon, type));
  return {
    type: 'GET_LISTED_POKEMONS',
    payload: {
      pokemons: pokedex,
    },
  };
};

export const updatePagination = () => ({
  type: 'UPDATE_PAGINATION',
});
