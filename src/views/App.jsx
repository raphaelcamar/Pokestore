import React, {useState } from 'react';

import Header from '../components/header/Header';
import {ThemeProvider} from 'styled-components';
import fire from '../styles/themes/fire';
import water from '../styles/themes/water';
import GlobalStyle from '../styles/global';
import {changeContext} from '../store/cart/actions/actions';
import {useDispatch} from 'react-redux';
import {AppDiv} from './styles'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Purchased from './purchased/Purchased';
import Tooltip from '../components/tooltip/Tooltip'
import Main from './main/Main';

const App = (_) => {

    const [showCart, setShowCart] = useState('hide')
    const themeStorage = JSON.parse(sessionStorage.getItem('@theme')) || fire
    const [theme, setTheme] = useState(themeStorage);

    const dispatch = useDispatch();

    sessionStorage.setItem(`@theme`, JSON.stringify(theme));
    dispatch(changeContext(theme.title));

    const catchStore = (type) =>{

        if(type === 'water') setTheme(water);
        if(type === 'fire') setTheme(fire);
    }

    const show = () =>{
        if(showCart === 'show')setShowCart('hide');
        if(showCart === 'hide')setShowCart('show');
    }

    return (
       <ThemeProvider theme={theme}>
           <GlobalStyle/>
            <AppDiv>
                <Router>
                    <Tooltip click={show}/>
                    <Header catchStore={catchStore}/>
                    <Switch>
                        <Route path={'/store', '/'} exact>
                            <Main showCart={showCart} theme={theme}/>
                        </Route>
                        <Route path='/infos/purchased'>
                            <Purchased store={theme.title}/>
                        </Route>
                    </Switch>
                </Router>
            </AppDiv>
       </ThemeProvider>
    )
}

export default App;