import React, { useState, useEffect, useContext } from 'react';
import {Container, WrapperContainer, Cards, CartBody, WrapperLoader} from './styles';
import Input from '../../components/input/Input';
import { createObjectPokemon, filterPokemon } from '../../helpers/Helpers';
import Cart from '../../components/cart/Cart';
import Card from '../../components/card/Card';
import { fetchPokemonType, getPokemons } from '../../api/Api';
import {ThemeContext} from 'styled-components'

const Main = props =>{

    const {colors} = useContext(ThemeContext)

    const {theme, showCart} = props;

    const [data, setData] = useState([]);
    const [initialData, setInitialData] = useState([]);

    useEffect(function(){
        fetchItems();
    }, [theme])
    
    const fetchItems = async () =>{
        setData([])
        const urlPokemon = await fetchPokemonType(theme.title);
        const pokemons = await getPokemons(urlPokemon);
        const pokedex = pokemons.map(pokemon => {return createObjectPokemon(pokemon, theme.title)});
        setInitialData(pokedex);
        setData(pokedex);

    }

    const searchPokemon = (value) =>{
        const filteredPokemons = filterPokemon(initialData, value)
        setData(filteredPokemons)
    }
    
    const renderCards = () =>{

        if(data.length <= 0){
            return (
                <WrapperLoader>
                    {/* <Loader type="Puff" color={colors.primary} height={100} width={100}/> */}
                    Loader
                </WrapperLoader>
            )
        }
        return data.map(item => {
            return <Card key={item.idPokemon} item={item} setStorage={()=>{}}/>
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
            <CartBody className={showCart}>
                <Cart/>
            </CartBody>
        </Container>
    )
}

export default Main;