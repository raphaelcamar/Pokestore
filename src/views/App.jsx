/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import {ThemeProvider} from 'styled-components';
import fire from '../styles/themes/fire';
import water from '../styles/themes/water';
import bug from '../styles/themes/bug';
import poison from '../styles/themes/poison';
import GlobalStyle from '../styles/global';
import { changeContext } from '../store/cart/actions/cartActions';
import { useDispatch } from 'react-redux';
import { AppDiv, Spacing } from './styles'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Purchased from './purchased/Purchased';
import Tooltip from '../components/tooltip/Tooltip'
import Main from './main/Main';

const App = (_) => {

    const [showCart, setShowCart] = useState(false)
    const themeStorage = JSON.parse(sessionStorage.getItem('@theme')) || fire
    const [theme, setTheme] = useState(themeStorage);

    const dispatch = useDispatch();

    sessionStorage.setItem(`@theme`, JSON.stringify(theme));
    
    useEffect(() =>{
        dispatch(changeContext(theme.title));
    }, []);

    const catchStore = (type) =>{

        const themes = {
            water,
            fire,
            bug,
            poison,
        }

        setTheme(themes[type]);
    }

    const show = () =>{
        setShowCart(!showCart);
    }
    
    return (
       <ThemeProvider theme={theme}>
           <GlobalStyle/>
            <AppDiv>
                    <Router>
                        <Tooltip click={show}/>
                        <Header catchStore={catchStore}/>
                        <Spacing>
                        <Switch>
                            <Route path='/infos/purchased'>
                                <Purchased store={theme.title}/>
                            </Route>
                            <Route path={'/'}>
                                <Main showCart={showCart} theme={theme}/>
                            </Route>
                        </Switch>
                        </Spacing>
                    </Router>
            </AppDiv>
       </ThemeProvider>
    )
}

export default App;