import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '~/components/Loader';
import { PokemonEvolutionData } from '~/models/Pokemon';
import { getPokemonEvolutions } from '~/services/Pokemon/pokemonRequests';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonEvolution, setPokemonEvolution] = useState<PokemonEvolutionData>();
  const params = useParams();

  const fetchPokemon = async () => {
    setIsLoading(true);
    const res = await getPokemonEvolutions(Number(params.id));
    setPokemonEvolution(res);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
  }, [params.id]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>{pokemonEvolution?.chain.species.name}</div>

          <h2>EVOLUTION:</h2>
          <div>
            {pokemonEvolution?.chain.evolves_to.map((pokemon) => (
              <div key={pokemon.species.name}>{pokemon.species.name}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
