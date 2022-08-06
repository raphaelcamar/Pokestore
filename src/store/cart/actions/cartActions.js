export const addPokemon = pokemon => ({
  type: 'ADD_POKEMON_CART',
  payload: {
    pokemon,
  },
});

export const removePokemon = pokemon => ({
  type: 'REMOVE_POKEMON',
  payload: {
    pokemon,
  },
});

export const qtdPokemon = (idPokemon, value) => ({
  type: 'ADD_SUBTRACT',
  payload: {
    idPokemon,
    value,
  },
});

export const clear = store => ({
  type: 'CLEAR_POKEMON',
  payload: {
    pokemon: [],
    store,
  },
});

export const changeContext = store => ({
  type: 'CHANGE_CONTEXT',
  payload: {
    store,
  },
});

export const buyPokemons = pokemons => ({
  type: 'BUY_POKEMON',
  payload: {
    purchasedPokemons: pokemons,
  },
});
