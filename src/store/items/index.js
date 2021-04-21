const INITIAL_STATE = JSON.parse(sessionStorage.getItem('@context-store')) || await fetchItems();


export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case '' :


        case ' ' :


        case ' ' :


        case ' ' :

        default : return state

    }
}

const saveInSession = (pokemons) =>{

    sessionStorage.setItem('@context-store', JSON.stringify(pokemons));
    const newContext = JSON.parse(sessionStorage.getItem('@context-store'));

    return newContext;
}

const fetchItems = async () =>{
    console.log('Async')
}

