/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { TypePokemon } from '@/domain';

const URL = 'https://pokeapi.co/api/v2';

type GetPokemonsType = {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
};

export const fetchPokemonType = async (type: TypePokemon): Promise<any> => {
  const response = await axios.get(`${URL}/type/${type}`);
  const { pokemon } = response.data;

  return pokemon;
};

export const searchPokemonInformation = async (pokemonsToSearch: GetPokemonsType): Promise<any> => {
  const response = await axios.get(pokemonsToSearch?.pokemon?.url);
  return response.data;
};

export const getPokemons = async (pokemons: GetPokemonsType[]): Promise<any> => {
  const result = await Promise.all(pokemons.map(pokemonToSearch => searchPokemonInformation(pokemonToSearch)));

  return result;
};
