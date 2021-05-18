import React, { useState, useEffect, useContext } from 'react';
import {Container, WrapperContainer, Cards, CartBody, WrapperLoader} from './styles';
import Input from '../../components/input/Input';
import { createObjectPokemon, filterPokemon } from '../../helpers/Helpers';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Cart from '../../components/cart/Cart';
import Card from '../../components/card/Card';
import { fetchPokemonType, getPokemons } from '../../api/Api';
import {ThemeContext} from 'styled-components'

const Main = props =>{

    const {colors} = useContext(ThemeContext);

    const {theme, showCart} = props;

    const [pokemons, setPokemons] = useState([]);
    const [initialPokemons, setInitialPokemons] = useState([]);

    useEffect(function(){
        fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])
    
    const fetchItems = async () =>{
        setPokemons([]);
        const urlPokemon = await fetchPokemonType(theme.title);
        const pokemons = await getPokemons(urlPokemon);
        const pokedex = pokemons.map(pokemon => {return createObjectPokemon(pokemon, theme.title)});
        setInitialPokemons(pokedex);
        setPokemons(pokedex);

    }

    const searchPokemon = (value) =>{
        const filteredPokemons = filterPokemon(initialPokemons, value)
        setPokemons(filteredPokemons)
    }
    
    const renderCards = () =>{

        if(pokemons.length <= 0){
            return (
                <WrapperLoader>
                    <Loader type="Puff" color={colors.primary} height={100} width={100}/>
                </WrapperLoader>
            )
        }
        return pokemons.map(pokemon => {
            return <Card key={pokemon.idPokemon} item={pokemon}/>
        });
    }

    return (
        <Container>
            <WrapperContainer>
                    <Input placeholder="Ex: Pikachu" label="Pesquise um pokemón" searchPokemon={searchPokemon}/>
                <Cards> 
                    {renderCards()}
                </Cards>
            </WrapperContainer>
            <CartBody className={showCart ? 'show' : 'hide'}>
                <Cart/>
            </CartBody>
        </Container>
    )
}

export default Main;