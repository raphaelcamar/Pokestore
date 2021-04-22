export const addPokemon = pokemon =>{
    return {
        type : 'ADD_POKEMON_CART',
        pokemon,
    }
}

export const removePokemon = idPokemon =>{
    return {
        type : 'REMOVE_POKEMON',
        idPokemon,
    }
}

export const qtdPokemon = (idPokemon, value) =>{
    return {
        type : 'ADD_SUBTRACT',
        idPokemon,
        value
    }
}

export const clear = (store) =>{
    return {
        type : 'CLEAR_POKEMON',
        pokemon : [],
        store
    }
}

export const changeContext = (store) =>{
    return {
        type : 'CHANGE_CONTEXT',
        store
    }
}

export const buyPokemons = (pokemons) =>{
    return {
        type : 'BUY_POKEMON',
        purchasedPokemons : pokemons
    }
}