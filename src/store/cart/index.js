const {title} = JSON.parse(sessionStorage.getItem('@theme')) || 'fire'
const INITIAL_STATE = JSON.parse(sessionStorage.getItem(`@context-store-${title}`)) || []

export default function reducerCart(state = INITIAL_STATE, action){

    const {type} = action;

    if(type === 'ADD_POKEMON_CART'){
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
        return newContext;
    }

    if(type === 'REMOVE_POKEMON'){
        const {type, idPokemon} = action.pokemon
        const pokemon = state.filter(pokemon => pokemon.idPokemon !== idPokemon);
       
        return saveInSession(pokemon, type)
    }

    if(type === 'CLEAR_POKEMON'){
        return saveInSession([], action.store);
    }
    if(type === 'ADD_SUBTRACT'){
        const pokemons = state.map(item => {
            if(item.idPokemon === action.idPokemon){
                 item.qtd = +action.value
                 item.currentPrice = (item.qtd * item.price).toFixed(2)
            }
            return item
        });
         
        return saveInSession(pokemons, pokemons[0].type);

    }
    
    if(type === 'CHANGE_CONTEXT'){
        const {store} = action;
          
        const newCart = JSON.parse(sessionStorage.getItem(`@context-store-${store}`)) || [];
        
        return saveInSession(newCart, store);
    }
    if(type === 'BUY_POKEMON'){
        const {purchasedPokemons } = action;
        const type = purchasedPokemons.pokemons[0].type
        savePurchasedItems(purchasedPokemons, type)
    }
    
    return state
}

const saveInSession = (pokemons, store) =>{

    sessionStorage.setItem(`@context-store-${store}`, JSON.stringify(pokemons));
    const newContext = JSON.parse(sessionStorage.getItem(`@context-store-${store}`));
    return newContext;

}

const savePurchasedItems = (pokemons, store) =>{

    const purchased = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${store}`)) || [];
    const newBuy = [...purchased, pokemons];
    sessionStorage.setItem(`purchased-pokemons-${store}`, JSON.stringify(newBuy));
    const newContext = JSON.parse(sessionStorage.getItem(`purchased-pokemons-${store}`));
    return newContext;
}