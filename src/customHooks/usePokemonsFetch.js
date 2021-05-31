import axios from 'axios';
import {ùseEffect, useState, useEffect} from 'react';
import { createObjectPokemon } from '../helpers/Helpers';
import {getPokemons} from '../api/Api'

const usePokemonsFetch = (pokemons = [], type) =>{

  const[paginate, setPaginate] = useState({
    initial: 0,
    count: 12,
  });
  const [pokemonsFetched, setPokemonsFetched] = useState([]);
  const [loadingPokemons, setLoadingPokemons] = useState(true);

  const updatePaginate = () =>{
    const {initial, count} = paginate;
    setLoadingPokemons(true);
    setPaginate({
      initial: count,
      count: count + 12
    });
  }

  useEffect(() =>{
    setPokemonsFetched([]);
    const {initial, count} = paginate
    const splittedPokemons = pokemons.slice(initial, count);
    if(splittedPokemons.length > 0){
      const result = getPokemons(splittedPokemons);

      result.then((res) =>{
        const result = res.map(pokemon =>{
          return createObjectPokemon(pokemon, type);
        });
        setPokemonsFetched([...pokemonsFetched, ...result]);
        setLoadingPokemons(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  useEffect(() =>{
    const {initial, count} = paginate
    const splittedPokemons = pokemons.slice(initial, count);
    if(splittedPokemons.length > 0){
      const result = getPokemons(splittedPokemons);

      result.then((res) =>{
        const result = res.map(pokemon =>{
          return createObjectPokemon(pokemon, type);
        });
        setPokemonsFetched([...pokemonsFetched, ...result]);
        setLoadingPokemons(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginate])

  return {
    pokemonsFetched,
    loadingPokemons,
    updatePaginate,
    setPaginate,
    paginate
  }
}

export default usePokemonsFetch