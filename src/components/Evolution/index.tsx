import { useEffect, useState } from 'react';

import Card from '~/components/Card';
import Loader from '~/components/Loader';
import { PokemonEvolution } from '~/models/Pokemon';
import { getPokemonEvolutionChainByUrl } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';
interface PokemonFromTree {
  name: string;
  canEvolve: boolean;
}

const Evolution: React.FC<{ url: string }> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<PokemonFromTree[]>();

  const pokemonThatEvolveList = pokemonEvolutionChain?.filter((pokemon) => pokemon.canEvolve);
  const pokemonThatDontEvolveList = pokemonEvolutionChain?.filter((pokemon) => !pokemon.canEvolve);

  const fetchPokemonSpecies = async () => {
    setIsLoading(true);
    const resEvolutionChain = await getPokemonEvolutionChainByUrl(url);
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
  const { colors } = useTheme();
  useEffect(() => {
    fetchPokemonSpecies();
  }, [url]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>EVOLUTION CHAIN:</h2>
          <S.EvolutionWrapper>
            {pokemonThatEvolveList?.length
              ? pokemonThatEvolveList.map((pokemon) => (
                  <S.EvolutionCard key={pokemon.name}>
                    <Card key={pokemon.name} pokemon={pokemon.name} light />
                    {pokemon.canEvolve && (
                      <FontAwesomeIcon icon={faAnglesRight} color={colors.black} size={'xl'} />
                    )}
                  </S.EvolutionCard>
                ))
              : null}
            <div>
              {pokemonThatDontEvolveList?.length
                ? pokemonThatDontEvolveList.map((pokemon) => (
                    <div key={pokemon.name}>
                      <Card key={pokemon.name} pokemon={pokemon.name} light />
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
