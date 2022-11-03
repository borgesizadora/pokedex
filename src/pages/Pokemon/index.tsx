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
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<string[][]>();
  const params = useParams();

  const fetchPokemonSpecies = async () => {
    setIsLoading(true);
    const res = await getPokemonSpecies(Number(params.id));
    setPokemonSpecies(res);
    const resEvolutionChain = await getPokemonEvolutionChainByUrl(res.evolution_chain.url);
    formatChain(resEvolutionChain.chain);

    setIsLoading(false);
  };

  const evolutionChainArr = [] as string[][];
  const formatChain = (evolutionChain: PokemonEvolution) => {
    evolutionChainArr.push([evolutionChain.species.name]);
    if (!evolutionChain.evolves_to.length) {
      setPokemonEvolutionChain(evolutionChainArr);
      return;
    }

    evolutionChain.evolves_to.forEach((pokemon) => {
      if (!pokemon.evolves_to.length) {
        evolutionChainArr.push([pokemon.species.name]);
        setPokemonEvolutionChain(evolutionChainArr);
        return;
      }
      formatChain(pokemon);
    });
  };
  useEffect(() => {
    console.log(pokemonEvolutionChain);
  }, [pokemonEvolutionChain]);

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
            ? pokemonEvolutionChain.map((pokemonTree, index) => (
                <div key={`${pokemonTree[0]}-${index}`}>
                  {pokemonTree.map((pokemon) => (
                    <Card key={pokemon} pokemon={pokemon} />
                  ))}
                  {pokemonEvolutionChain[index + 1] && <>next</>}
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default Pokemon;
