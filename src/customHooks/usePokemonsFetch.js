import { useState, useEffect } from 'react';
import { createObjectPokemon } from '../helpers/Helpers';
import { getPokemons } from '../api/Api'

const usePokemonsFetch = (pokemons, type) =>{

  const [statePokemons, setStatePokemons] = useState([]);
  const [loadingPokemons, setLoadingPokemons] = useState(true);
  const [pokemonsToFetch, setPokemonsToFetch] = useState(pokemons);

  useEffect(() =>{
    setPokemonsToFetch(pokemons);
    const pokemonsSplitted = pokemons.slice(0, 12);

    const pokemonsFetched = getPokemons(pokemonsSplitted);
    
    pokemonsFetched.then(res => {
      const objPokemon = res.map(pokemon => {
        return createObjectPokemon(pokemon, type);
      });

      setStatePokemons(objPokemon);
      setLoadingPokemons(false);

    })
  }, [pokemons]);

  const fetchNewPage = (initial, offset) => {
    setLoadingPokemons(true);
    const pokemonsSplitted = pokemonsToFetch.slice(initial, offset);
    const pokemonsFetched = getPokemons(pokemonsSplitted);

    pokemonsFetched.then(res =>{
      const objPokemon = res.map(pokemon => {
        return createObjectPokemon(pokemon);
      });

      setStatePokemons([...statePokemons, ...objPokemon]);
      setLoadingPokemons(false);
    });
  }


  const filter = (pokemonsFiltered) => {
    setLoadingPokemons(true);
    setStatePokemons([]);
    setPokemonsToFetch(pokemonsFiltered);
    const pokemonsSplitted = pokemonsFiltered.splice(0, 12);
    const pokemonsFetched = getPokemons(pokemonsSplitted);
    pokemonsFetched.then(res => {
     const objPokemon = res.map(pokemon => {
       return createObjectPokemon(pokemon, type)
     });

     setStatePokemons(objPokemon);
     setLoadingPokemons(false);
    });
  }

  return {
    filter,
    statePokemons,
    pokemonsToFetch,
    loadingPokemons,
    fetchNewPage
  }

}

//   useEffect(() =>{
//     setPokemonsFetched([]);

//     if(pokemons.length > 0){
//       const result = getPokemons(pokemons.slice(0, 12));

//       result.then((res) =>{
//         const result = res.map(pokemon =>{
//           return createObjectPokemon(pokemon, type);
//         });
//         setPokemonsFetched(result);
//         setLoadingPokemons(false);
//       });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pokemons]);

//   const fetchFilterPokemons = (pokemonsSearched) => {

//     setLoadingPokemons(true)
//     setPokemonsFetched([]);

//     if(pokemonsSearched.length > 0){
//       const result = getPokemons(pokemonsSearched)

//       result.then((res) =>{
//         const result = res.map(pokemon => {
//           return createObjectPokemon(pokemon, type);
//         });
//         setPokemonsFetched(result);
        
//       }).then(() =>{setLoadingPokemons(false)});
//     }
//   }

//   const newFetchPokemons = (initial, offset) =>{
//     const splittedPokemons = pokemons.slice(initial, offset);
//     const result = getPokemons(splittedPokemons);
//     result.then(resp => {
//       const createObject = resp.map(pokemon => {
//         return createObjectPokemon(pokemon, type);
//       });
//       setPokemonsFetched(createObject);
//     })
//     setPokemonsFetched(result);
//   }

//   return {
//     pokemonsFetched,
//     loadingPokemons,
//     fetchFilterPokemons,
//     newFetchPokemons,
//   }
// }

export default usePokemonsFetch