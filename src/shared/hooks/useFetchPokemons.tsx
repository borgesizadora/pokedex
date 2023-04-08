import { useState, useEffect, useCallback } from 'react';

import { Result } from '~/models/Pokemon';
import { getAllPokemon } from '~/services/Pokemon/pokemonRequests';

const LIMIT = 20;

function useFetchPokemons(offset: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allPokemonList, setAllPokemonList] = useState<Result[]>([]);

  const getPokemonList = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getAllPokemon(offset, LIMIT);
      setAllPokemonList((prevState) => [...prevState, ...res.results]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(!!err);
    }
  }, [offset]);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList, offset]);

  return { loading, error, allPokemonList };
}

export default useFetchPokemons;
