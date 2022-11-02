import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '~/components/Card';
import Loader from '~/components/Loader';
import { PokemonEvolution, PokemonSpecies } from '~/models/Pokemon';
import {
  getPokemonEvolutionChainByUrl,
  getPokemonSpecies
} from '~/services/Pokemon/pokemonRequests';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<string[]>();
  const params = useParams();

  const fetchPokemonSpecies = async () => {
    setIsLoading(true);
    const res = await getPokemonSpecies(Number(params.id));
    setPokemonSpecies(res);
    const resEvolutionChain = await getPokemonEvolutionChainByUrl(res.evolution_chain.url);
    formatChain(resEvolutionChain.chain);

    setIsLoading(false);
  };

  const evolutionChainArr = [] as string[];
  const formatChain = (evolutionChain: PokemonEvolution) => {
    if (!evolutionChain.evolves_to.length) {
      evolutionChainArr.push(evolutionChain.species.name);
      setPokemonEvolutionChain(evolutionChainArr);
      return;
    }
    evolutionChainArr.push(evolutionChain.species.name);
    formatChain(evolutionChain.evolves_to[0]);
  };

  useEffect(() => {
    fetchPokemonSpecies();
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{pokemonSpecies?.name.toUpperCase()}</h1>
          <br />

          <h2>EVOLUTION:</h2>

          {pokemonEvolutionChain?.length
            ? pokemonEvolutionChain.map((pokemon) => <Card key={pokemon} pokemon={pokemon} />)
            : null}
        </>
      )}
    </div>
  );
};

export default Pokemon;
