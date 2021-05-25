export const addPokemon = pokemon =>{
    return {
        type : 'ADD_POKEMON_CART',
        payload: {
            pokemon,
        }
    }
}

export const removePokemon = pokemon =>{
    return {
        type : 'REMOVE_POKEMON',
        payload: {
            pokemon
        }
    }
}

export const qtdPokemon = (idPokemon, value) =>{
    return {
        type : 'ADD_SUBTRACT',
        payload: {
            idPokemon,
            value
        }
    }
}

export const clear = (store) =>{
    return {
        type : 'CLEAR_POKEMON',
        payload: {
            pokemon : [],
            store
        }
    }
}

export const changeContext = (store) =>{
    return {
        type : 'CHANGE_CONTEXT',
        payload: {
            store
        }
    }
}

export const buyPokemons = (pokemons) =>{
    return {
        type : 'BUY_POKEMON',
        payload: {
            purchasedPokemons : pokemons
        }
    }
}