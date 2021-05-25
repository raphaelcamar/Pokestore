/* eslint-disable no-fallthrough */
const INITIAL_STATE = {urlPokemons: [], pokemons: [], pagination: [0 , 0]};

export default function pokemonReducer(state = INITIAL_STATE, action){
  const { type } = action;
  switch(type){
    case 'FETCH_POKEMONS':
      return {...state, urlPokemons: action.payload.urlPokemons, pokemons: action.payload.pokemons};
    
    case 'CLEAR_STORE':
      return {...INITIAL_STATE};

    case 'GET_LISTED_POKEMONS':
        const [, offset] = state.pagination;
        const pokemons = state.pokemons;
        pokemons.push(...action.payload.pokemons);
        return {...state, pokemons: pokemons, pagination: [offset, offset+12]}

    default: return state;
  }
}