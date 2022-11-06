import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import Card from '~/components/Card';
import Loader from '~/components/Loader';
import { PokemonEvolution } from '~/models/Pokemon';
import { getPokemonEvolutionChainByUrl } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';
interface PokemonFromTree {
  id: string;
  name: string;
  canEvolve: boolean;
}

const Evolution: React.FC<{ url: string }> = ({ url }) => {
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<PokemonFromTree[]>();

  const pokemonThatEvolveList = pokemonEvolutionChain?.filter((pokemon) => pokemon.canEvolve);
  const pokemonThatDontEvolveList = pokemonEvolutionChain?.filter((pokemon) => !pokemon.canEvolve);

  const clearURL = (url: string, name: string) => {
    if (url.includes('https://pokeapi.co/api/v2/pokemon-species/'))
      return url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
    return name;
  };

  const evolutionChainArr = useMemo(() => [] as PokemonFromTree[], []);

  const formatChain = useCallback(
    (evolutionChain: PokemonEvolution) => {
      if (!evolutionChain.evolves_to.length) {
        evolutionChainArr.push({
          id: clearURL(evolutionChain.species.url, evolutionChain.species.name),
          name: evolutionChain.species.name,
          canEvolve: false
        });
        setPokemonEvolutionChain(evolutionChainArr);
        return;
      }
      if (!evolutionChainArr.length)
        evolutionChainArr.push({
          id: clearURL(evolutionChain.species.url, evolutionChain.species.name),
          name: evolutionChain.species.name,
          canEvolve: true
        });

      evolutionChain.evolves_to.forEach((pokemon) => {
        if (!pokemon.evolves_to.length) {
          evolutionChainArr.push({
            id: clearURL(pokemon.species.url, pokemon.species.name),
            name: pokemon.species.name,
            canEvolve: false
          });
          setPokemonEvolutionChain(evolutionChainArr);
          return;
        }
        evolutionChainArr.push({
          id: clearURL(pokemon.species.url, pokemon.species.name),
          name: pokemon.species.name,
          canEvolve: true
        });
        setPokemonEvolutionChain(evolutionChainArr);
        formatChain(pokemon);
      });
    },
    [evolutionChainArr]
  );

  const { isFetching } = useQuery(['pokemonChain', url], () => getPokemonEvolutionChainByUrl(url), {
    onSuccess: (pokemonChain) => formatChain(pokemonChain?.chain)
  });

  const { colors } = useTheme();

  return (
    <S.Wrapper>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <h2>EVOLUTION CHAIN:</h2>
          <S.EvolutionWrapper>
            {pokemonThatEvolveList?.length
              ? pokemonThatEvolveList.map((pokemon) => (
                  <S.EvolutionCard key={pokemon.name}>
                    <Card key={pokemon.name} pokemon={pokemon.id} light />
                    {pokemon.canEvolve && (
                      <FontAwesomeIcon icon={faAnglesRight} color={colors.black} size={'xl'} />
                    )}
                  </S.EvolutionCard>
                ))
              : null}

            {pokemonThatDontEvolveList?.length ? (
              <S.LastEvolutionGroup
                showShadow={pokemonThatDontEvolveList.length > 1}
                hasManyEvolutions={pokemonThatDontEvolveList.length > 3}>
                {pokemonThatDontEvolveList.map((pokemon) => (
                  <div key={pokemon.name}>
                    <Card key={pokemon.name} pokemon={pokemon.id} light />
                  </div>
                ))}
              </S.LastEvolutionGroup>
            ) : null}
          </S.EvolutionWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default Evolution;
