import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '~/components/Loader';
import PokedexLayout from '~/components/PokedexLayout';
import { Pokemon as PokeType } from '~/models/Pokemon';
import { getPokemonById } from '~/services/Pokemon/pokemonRequests';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokeType>();

  const params = useParams();
  const fetchPokemon = async () => {
    setIsLoading(true);
    const res = await getPokemonById(Number(params.id));
    setPokemon(res);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>{isLoading ? <Loader /> : pokemon ? <PokedexLayout pokemon={pokemon} /> : <div />}</div>
  );
};

export default Pokemon;
