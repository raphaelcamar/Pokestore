import { combineReducers } from 'redux';
import cartReducer from './cart/index'
import pokemonReducer from './pokemons';


const rootReducer = combineReducers({
  cart: cartReducer,
  pokemons: pokemonReducer,
});

export default rootReducer;