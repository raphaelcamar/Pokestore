const INITIAL_STATE = JSON.parse(sessionStorage.getItem('@-pokemons')) || []

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_POKEMON_CART' :
            const {pokemon} = action
            let newContext = []

            const filter = state.filter(item => {
                if(item.idPokemon === pokemon.idPokemon){
                    item.qtd += 1
                    item.currentPrice = (item.qtd * item.price).toFixed(2)
                    return item
                }
                return ''
            });

            if(filter.length === 0){
                newContext = saveInSession([...state, pokemon]);
            }else{
                newContext = saveInSession([...state]);
            }
            return newContext

        case 'REMOVE_POKEMON' :
            const filteredPokemon = state.filter(pokemon => pokemon.idPokemon !== action.idPokemon)
            return saveInSession(filteredPokemon)

        case 'CLEAR_POKEMON' : 
            return saveInSession([])

        case 'ADD_SUBTRACT' :
            const pokemons = state.map(item => {
               if(item.idPokemon === action.idPokemon){
                    item.qtd = +action.value
                    item.currentPrice = (item.qtd * item.price).toFixed(2)
               }
               return item
            });
            
            return saveInSession(pokemons);
               
        default : return state
    }
}

const saveInSession = (pokemons) =>{

    sessionStorage.setItem('@-pokemons', JSON.stringify(pokemons));
    const newContext = JSON.parse(sessionStorage.getItem('@-pokemons'));

    return newContext;
}