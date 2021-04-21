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
import GlobalStyle from '../styles/global'


import {AppDiv, Container, WrapperContainer, Padding, Cards, CartBody} from './styles'

const App = props => {

    const [data, setData ] = useState([]);

    // const theme = JSON.parse(sessionStorage.getItem(`@type`))

    const [theme, setTheme] = useState(fire);
    const [initialData, setinitialData] = useState([]);

    const arrPokemon = [];

    useEffect(() => {
        
        fetchItems();

    }, [])

    const openCart = () =>{
        document.querySelector('.cart-body').classList.remove('cart-body')
        document.querySelector('.cart-body').classList.add('cart-body-open')
    }

    const catchStore = (type) =>{
        setTheme(water)
        // fetchItems();
    }

    async function fetchItems(){
        const urlPokemon = await fetchPokemonType(theme.title);

        for (let i = 0; i < urlPokemon.length; i++) {
            const { url } = urlPokemon[i].pokemon
            const data = await fetchPokemons(url);
            const objPokemon = createObjectPokemon(data, i);
            arrPokemon.push(objPokemon)
        }
        setinitialData(arrPokemon);
        setData(arrPokemon);
    }
    useEffect(() =>{

    }, [])

    function renderCards(){


        return data.map(item => {
            return <Card key={item.idPokemon} item={item} setStorage={()=>{}}/>
        })
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
                <Header open={openCart} catchStore={catchStore}/>
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