import { Pokemon, TypePokemon } from '@/domain';

export const BUY_POKEMON = 'BUY_POKEMON';
export const ADD_POKEMON_CART = 'ADD_POKEMON_CART';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const SWITCH_STORE = 'SWITCH_STORE';
export const CLEAR_POKEMON = 'CLEAR_POKEMON';

type BuyPokemonAction = {
  type: typeof BUY_POKEMON;
  payload: Pokemon[];
};

type AddPokemonCartAction = {
  type: typeof ADD_POKEMON_CART;
  payload: Pokemon;
};

type RemovePokemonAction = {
  type: typeof REMOVE_POKEMON;
  payload: Pokemon[];
};

type ChangeQuantityPokemonAction = {
  type: typeof CHANGE_QUANTITY;
  payload: {
    id: string;
    value: number;
  };
};

type SwitchStoreAction = {
  type: typeof SWITCH_STORE;
  payload: TypePokemon;
};

type ClearPokemonAction = {
  type: typeof CLEAR_POKEMON;
  payload: Pokemon[];
};

export type ActionTypes =
  | BuyPokemonAction
  | AddPokemonCartAction
  | RemovePokemonAction
  | ClearPokemonAction
  | ChangeQuantityPokemonAction
  | SwitchStoreAction;
