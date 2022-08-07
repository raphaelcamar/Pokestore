import { Pokemon, TypePokemon } from '@/domain';
import {
  ActionTypes,
  ADD_POKEMON_CART,
  BUY_POKEMON,
  CHANGE_QUANTITY,
  CLEAR_POKEMON,
  REMOVE_POKEMON,
  SWITCH_STORE,
} from './types';

export const addPokemon = (pokemon: Pokemon): ActionTypes => ({
  type: ADD_POKEMON_CART,
  payload: pokemon,
});

export const removePokemon = (pokemons: Pokemon[]): ActionTypes => ({
  type: REMOVE_POKEMON,
  payload: pokemons,
});

export const changeQuantity = (id: string, value: number): ActionTypes => ({
  type: CHANGE_QUANTITY,
  payload: {
    id,
    value,
  },
});

export const clear = (pokemons: Pokemon[]): ActionTypes => ({
  type: CLEAR_POKEMON,
  payload: pokemons,
});

export const switchStore = (store: TypePokemon): ActionTypes => ({
  type: SWITCH_STORE,
  payload: store,
});

export const buy = (pokemons: Pokemon[]): ActionTypes => ({
  type: BUY_POKEMON,
  payload: pokemons,
});
