import { useState, useEffect, useCallback } from 'react';

import { AllPokemon, Pokemon } from '~/models/Pokemon';
import { getAllPokemon, getPokemonByUrl } from '~/services/Pokemon/pokemonRequests';

const LIMIT = 20;

function useFetchPokemons(offset: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allPokemonComplete, setAllPokemonComplete] = useState<Pokemon[]>([]);

  const fillPokemonListData = async (list: AllPokemon) => {
    const arr = [] as Pokemon[];
    for await (const pokemon of list.results) {
      const resPokemon = await getPokemonByUrl(pokemon.url);
      arr.push(resPokemon);
    }

    setAllPokemonComplete((prevState) => [...prevState, ...arr]);
  };

  const getPokemonList = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllPokemon(offset, LIMIT);
      await fillPokemonListData(res);
      setLoading(false);
    } catch (err) {
      setError(!!err);
    }
  }, [offset]);

  useEffect(() => {
    getPokemonList();
  }, [offset]);

  return { loading, error, allPokemonComplete };
}

export default useFetchPokemons;
