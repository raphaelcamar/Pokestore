import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import {Provider} from 'react-redux';
import rootReducer from './store/index';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';

const store = applyMiddleware(promise)(createStore)(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)