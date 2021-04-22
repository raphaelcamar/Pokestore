import React from 'react';
import {Container} from './index'

const Input = ({searchPokemon, label, placeholder}) => {

    const search = (value) =>{
        searchPokemon(value)
    }
    
    return (
        <Container>
            <label htmlFor="inputSearch">{label}</label>
            <input type="text" name="search" placeholder={placeholder} id="inputSearch" onChange={(input) =>{search(input.target.value)}}/>
        </Container>
    )
}

export default Input;