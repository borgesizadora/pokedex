import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '~/components/Loader';
import PokedexLayout from '~/pages/Pokedex/components/PokedexLayout';
import { Pokemon as PokeType } from '~/models/Pokemon';
import { getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';

const PokemonId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokeType>();

  const params = useParams();

  const fetchPokemon = async () => {
    setIsLoading(true);
    const res = await getPokemonByIdOrName(Number(params.id));
    setPokemon(res);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
  }, [params.id]);

  return (
    <div>{isLoading ? <Loader /> : pokemon ? <PokedexLayout pokemon={pokemon} /> : <div />}</div>
  );
};

export default PokemonId;
