import React, { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import Cart from '../components/cart/Cart';
import Header from '../components/header/Header';
import Input from '../components/input/Input'
// import './app.css';
import {fetchPokemonType, fetchPokemons} from '../api/Api';
import {createObjectPokemon} from '../helpers/Helpers';
import {ThemeProvider} from 'styled-components';
import fire from '../styles/themes/fire';
import water from '../styles/themes/water';
import GlobalStyle from '../styles/global';
import {changeContext} from '../store/cart/actions/index';
import {useDispatch} from 'react-redux';

import {AppDiv, Container, WrapperContainer, Cards, CartBody} from './styles'

const App = props => {

    const [data, setData ] = useState([]);
    const th = JSON.parse(sessionStorage.getItem('@theme')) || fire
    const [theme, setTheme] = useState(th);
    const [initialData, setinitialData] = useState([]);

    const dispatch = useDispatch();

    sessionStorage.setItem(`@theme`, JSON.stringify(theme));
    dispatch(changeContext(theme.title))

    const arrPokemon = [];

    useEffect(function(){
        fetchItems();
    }, [theme])

    const catchStore = (type) =>{

        if(type === 'water') setTheme(water);
        if(type === 'fire') setTheme(fire);

        
        setData([]);
    }



    async function fetchItems(){

        const urlPokemon = await fetchPokemonType(theme.title);

        for (let i = 0; i < urlPokemon.length; i++) {
            const { url } = urlPokemon[i].pokemon;
            const data = await fetchPokemons(url);
            const objPokemon = createObjectPokemon(data, theme.title);
            arrPokemon.push(objPokemon);
        }
        setinitialData(arrPokemon);
        setData(arrPokemon);
    }

    function renderCards(){
        if(data.length <= 0){
            return <div>Loader</div>
        }
        return data.map(item => {
            return <Card key={item.idPokemon} item={item} setStorage={()=>{}}/>
        });
    }

    const searchPokemon = (value) =>{

        const pokemonsFiltered = initialData.filter(pokemon =>{
            
            return pokemon.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        });

        setData(pokemonsFiltered)
    }

    return (
       <ThemeProvider theme={theme}>
           <GlobalStyle/>
            <AppDiv>
                <Header  catchStore={catchStore}/>
                <Container>
                    <WrapperContainer>
                            <Input placeholder="Ex: Pikachu" label="Pesquise um pokemón" searchPokemon={searchPokemon}/>
                        <Cards>
                                {renderCards()}
                        </Cards>
                    </WrapperContainer>
                    <CartBody>
                        <Cart />
                    </CartBody>
                </Container>
            </AppDiv>
       </ThemeProvider>
    )
}

export default App;