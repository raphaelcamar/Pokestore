import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { cartReducer } from './store/cart';
import pokemonReducer from './store/pokemons';
import App from './views/App';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    pokemon: pokemonReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
