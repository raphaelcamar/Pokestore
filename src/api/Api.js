import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonType = async type => {
  const response = await axios.get(`${URL}/type/${type}`);
  const { pokemon } = response.data;
  return pokemon;
};

export const fetchPokemons = async url => {
  const response = await axios.get(url);

  return response.data;
};

export const getPokemons = async pokemons => {
  const arrPokemon = [];
  for (let i = 0; i < pokemons.length; i++) {
    const { url } = pokemons[i].pokemon;
    const pokemon = await fetchPokemons(url);
    arrPokemon.push(pokemon);
  }

  return arrPokemon;
};
