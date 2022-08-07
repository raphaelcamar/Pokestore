import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Header } from '@/components/organisms';
import { changeContext } from '../store/cart/actions/cartActions';
import { AppDiv, Spacing } from './styles';
import Purchased from './purchased/Purchased';
import Tooltip from '../components/tooltip/Tooltip';
import Main from './main/Main';
import { StyledThemeProvider } from '@/contexts/theme';

const App = props => {
  const [showCart, setShowCart] = useState(false);

  const show = () => {
    setShowCart(!showCart);
  };

  return (
    <StyledThemeProvider>
      <AppDiv>
        <Router>
          <Tooltip click={show} />
          <Header />
          <Spacing>
            <Switch>
              <Route path="/infos/purchased">
                <Purchased />
              </Route>
              <Route path="/">
                <Main showCart={showCart} />
              </Route>
            </Switch>
          </Spacing>
        </Router>
      </AppDiv>
    </StyledThemeProvider>
  );
};

const mapStateToProps = state => ({ store: state });
const mapDispatchToProps = dispatch => bindActionCreators({ changeContext }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
