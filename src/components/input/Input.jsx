import React from 'react';
import './input.css'
import {Container, InputStyle, Label} from './index'

const Input = props => {

    const {searchPokemon} = props

    const search = (value) =>{
        searchPokemon(value)
    }
    
    return (
        <Container>
            <Label htmlFor="inputSearch">{props.label}</Label>
            <InputStyle type="text" name="search" placeholder={props.placeholder} id="inputSearch" onChange={(input) =>{search(input.target.value)}}/>
        </Container>
    )
}

export default Input;