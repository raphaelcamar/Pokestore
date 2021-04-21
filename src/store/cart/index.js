const {title} = JSON.parse(sessionStorage.getItem('@theme')) || 'fire'
const INITIAL_STATE = JSON.parse(sessionStorage.getItem(`@context-store-${title}`)) || []

export default function reducerCart(state = INITIAL_STATE, action){
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
                newContext = saveInSession([...state, pokemon], pokemon.type);
            }else{
                newContext = saveInSession([...state],pokemon.type);
            }
            return newContext

        case 'REMOVE_POKEMON' :
            
            const filteredPokemon = state.filter(pokemon => pokemon.idPokemon !== action.idPokemon)
            return saveInSession(filteredPokemon, filteredPokemon.type)

        case 'CLEAR_POKEMON' :

            return saveInSession([], action.store)

        case 'ADD_SUBTRACT' :
            const pokemons = state.map(item => {
               if(item.idPokemon === action.idPokemon){
                    item.qtd = +action.value
                    item.currentPrice = (item.qtd * item.price).toFixed(2)
               }
               return item
            });
            
            return saveInSession(pokemons, pokemons[0].type);
        
        case 'CHANGE_CONTEXT' :
            const {store} = action
          
            const newCart = JSON.parse(sessionStorage.getItem(`@context-store-${store}`)) || [];
            
            return saveInSession(newCart, store)
        default : return state
    }
}

const saveInSession = (pokemons, store) =>{

    sessionStorage.setItem(`@context-store-${store}`, JSON.stringify(pokemons));
    const newContext = JSON.parse(sessionStorage.getItem(`@context-store-${store}`));
    return newContext;

}