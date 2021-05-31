/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import fire from '../styles/themes/fire';
import { changeContext } from '../store/cart/actions/cartActions';
import { connect, useDispatch } from 'react-redux';
import { AppDiv, Spacing } from './styles'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Purchased from './purchased/Purchased';
import Tooltip from '../components/tooltip/Tooltip'
import Main from './main/Main';
import { ThemesProvider } from '../contexts/ThemeContext';
import { bindActionCreators } from 'redux';

const App = (props) => {

    const [showCart, setShowCart] = useState(false);

    const show = () =>{
        setShowCart(!showCart);
    }
    
    return (
        <ThemesProvider>
            <AppDiv>
                <Router>
                    <Tooltip click={show}/>
                    <Header />
                    <Spacing>
                        <Switch>
                            <Route path='/infos/purchased'>
                                <Purchased />
                            </Route>
                            <Route path={'/'}>
                                <Main showCart={showCart} />
                            </Route>
                        </Switch>
                    </Spacing>
                </Router>
            </AppDiv>
        </ThemesProvider>
    )
}

const mapStateToProps = state => ({store: state});
const mapDispatchToProps = dispatch => bindActionCreators({changeContext}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);