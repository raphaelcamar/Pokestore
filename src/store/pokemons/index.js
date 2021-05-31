/* eslint-disable no-fallthrough */
const INITIAL_STATE = {urlPokemons: [], pokemons: [], pagination: [0, 0]};

export default function pokemonReducer(state = INITIAL_STATE, action){
  const { type } = action;
  switch(type){
    case 'FETCH_POKEMONS':
      return {...state, urlPokemons: action.payload.urlPokemons};
    
    case 'CLEAR_STORE':
      return {urlPokemons: [], pokemons: [], pagination: [0.0]};

    case 'GET_LISTED_POKEMONS':
      const pokemons = state.pokemons;
      pokemons.push(...action.payload.pokemons);
      return {...state, pokemons: pokemons}
    case 'UPDATE_PAGINATION':
      const[, offset] = state.pagination;
      const newOffset = offset + 3;
      return {...state, pagination: [offset, newOffset]}

    default: return state;
  }
}