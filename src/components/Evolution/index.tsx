import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '~/components/Card';
import Loader from '~/components/Loader';
import { PokemonEvolution, PokemonSpecies } from '~/models/Pokemon';
import {
  getPokemonEvolutionChainByUrl,
  getPokemonSpecies
} from '~/services/Pokemon/pokemonRequests';

import * as S from './styles';
interface PokemonFromTree {
  name: string;
  canEvolve: boolean;
}

const Evolution: React.FC<{ id: number }> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<PokemonFromTree[]>();
  const params = useParams();

  const pokemonThatEvolveList = pokemonEvolutionChain?.filter((pokemon) => pokemon.canEvolve);
  const pokemonThatDontEvolveList = pokemonEvolutionChain?.filter((pokemon) => !pokemon.canEvolve);

  const fetchPokemonSpecies = async () => {
    setIsLoading(true);
    const res = await getPokemonSpecies(id);
    setPokemonSpecies(res);
    const resEvolutionChain = await getPokemonEvolutionChainByUrl(res.evolution_chain.url);
    formatChain(resEvolutionChain.chain);

    setIsLoading(false);
  };

  const evolutionChainArr = [] as PokemonFromTree[];
  const formatChain = (evolutionChain: PokemonEvolution) => {
    if (!evolutionChain.evolves_to.length) {
      evolutionChainArr.push({ name: evolutionChain.species.name, canEvolve: false });
      setPokemonEvolutionChain(evolutionChainArr);
      return;
    }
    if (!evolutionChainArr.length)
      evolutionChainArr.push({ name: evolutionChain.species.name, canEvolve: true });

    evolutionChain.evolves_to.forEach((pokemon) => {
      if (!pokemon.evolves_to.length) {
        evolutionChainArr.push({ name: pokemon.species.name, canEvolve: false });
        setPokemonEvolutionChain(evolutionChainArr);
        return;
      }
      evolutionChainArr.push({ name: pokemon.species.name, canEvolve: true });
      setPokemonEvolutionChain(evolutionChainArr);
      formatChain(pokemon);
    });
  };

  useEffect(() => {
    fetchPokemonSpecies();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{pokemonSpecies?.name.toUpperCase()}</h1>
          <br />

          <h2>EVOLUTION:</h2>
          <S.EvolutionWrapper>
            {pokemonThatEvolveList?.length
              ? pokemonThatEvolveList.map((pokemon) => (
                  <S.EvolutionCard key={pokemon.name}>
                    <Card key={pokemon.name} pokemon={pokemon.name} />
                    {pokemon.canEvolve && <>next</>}
                  </S.EvolutionCard>
                ))
              : null}
            <div>
              {pokemonThatDontEvolveList?.length
                ? pokemonThatDontEvolveList.map((pokemon) => (
                    <div key={pokemon.name}>
                      <Card key={pokemon.name} pokemon={pokemon.name} />
                    </div>
                  ))
                : null}
            </div>
          </S.EvolutionWrapper>
        </>
      )}
    </div>
  );
};

export default Evolution;
