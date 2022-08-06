/* eslint-disable default-param-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
const { title } = JSON.parse(sessionStorage.getItem('@theme')) || 'fire';
const INITIAL_STATE = JSON.parse(sessionStorage.getItem(`@context-store-${title}`)) || [];

export default function cartReducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case 'ADD_POKEMON_CART':
      const { pokemon } = action.payload;

      let newContext = [];

      const filter = state.filter(item => {
        if (item.idPokemon === pokemon.idPokemon) {
          item.qtd += 1;
          item.currentPrice = (item.qtd * item.price).toFixed(2);
          return item;
        }
        return '';
      });

      if (filter.length === 0) {
        newContext = saveInSession([...state, pokemon], pokemon.type);
      } else {
        newContext = saveInSession([...state], pokemon.type);
      }
      return newContext;
    case 'REMOVE_POKEMON':
      const { type, idPokemon } = action.payload.pokemon;
      const pokemonRemoved = state.filter(pokemon => pokemon.idPokemon !== idPokemon);

      return saveInSession(pokemonRemoved, type);

    case 'CLEAR_POKEMON':
      return saveInSession([], action.payload.store);

    case 'ADD_SUBTRACT':
      const pokemons = state.map(pokemon => {
        if (pokemon.idPokemon === action.payload.idPokemon) {
          pokemon.qtd = Number(action.payload.value);
          pokemon.currentPrice = (pokemon.qtd * pokemon.price).toFixed(2);
        }
        return pokemon;
      });

      return saveInSession(pokemons, pokemons[0].type);
    case 'CHANGE_CONTEXT':
      const { store } = action.payload;

      const newCart = JSON.parse(sessionStorage.getItem(`@context-store-${store}`)) || [];

      return saveInSession(newCart, store);

    case 'BUY_POKEMON':
      const { purchasedPokemons } = action.payload;
      const storeType = purchasedPokemons.pokemons[0].type;
      savePurchasedItems(purchasedPokemons, storeType);

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}

const saveInSession = (pokemons, store) => {
  sessionStorage.setItem(`@context-store-${store}`, JSON.stringify(pokemons));
  return pokemons;
};

const savePurchasedItems = (pokemons, store) => {
  const purchased = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${store}`)) || [];
  const newBuy = [...purchased, pokemons];
  sessionStorage.setItem(`purchased-pokemons-${store}`, JSON.stringify(newBuy));

  return newBuy;
};
