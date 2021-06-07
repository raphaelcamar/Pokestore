import { useEffect, useState} from 'react';
import axios from 'axios';

const usePokemonTypeSearch = (type) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [urlPokemons, setUrlPokemons] = useState([]);

  useEffect(() =>{
    setLoading(true);
    setError(false);
    setUrlPokemons([]);
      axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/type/${type}`,
        // cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res =>{
        setUrlPokemons(res.data.pokemon);
        setLoading(false)
      })
      .catch(e => {
        if(axios.isCancel(e)) return
        setError(true);
      })
  }, [type]);

  return {
    loading,
    error,
    urlPokemons
  }
}

export default usePokemonTypeSearch;
