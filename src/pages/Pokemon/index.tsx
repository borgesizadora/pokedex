import { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';

import Evolution, { EvolutionSkeleton } from '~/components/Evolution';
import StatsChart from '~/components/StatsChart';
import TypeCard from '~/components/TypeCard';
import { Pokemon as IPokemon, PokemonSpecies } from '~/models/Pokemon';
import { getPokemonSpecies, getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

const Pokemon = () => {
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const fetchPokemon = useCallback(async () => {
    if (params?.id) {
      setIsLoading(true);
      const resSpecies = await getPokemonSpecies(params.id);
      const resPokemon = await getPokemonByIdOrName(params.id);
      setPokemonSpecies(resSpecies);
      setPokemon(resPokemon);
      setIsLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchPokemon();
  }, [params.id, fetchPokemon]);

  return (
    <S.Container>
      {isLoading && <PokemonSkeleton />}

      {!isLoading && params.id && pokemon ? (
        <S.Wrapper>
          <S.Header type={pokemon.types[0].type.name}>
            <Link to={`/pokemon/${Number(pokemon?.id) > 1 ? Number(pokemon?.id) - 1 : 1}`}>
              <S.HeaderButton>
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>PREV POKEMON</p>
              </S.HeaderButton>
            </Link>
            <S.MainImage type={pokemon.types[0].type.name}>
              <img
                src={
                  pokemon.sprites.other['official-artwork'].front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
              />
            </S.MainImage>

            <Link to={`/pokemon/${Number(pokemon.id) + 1}`}>
              <S.HeaderButton>
                <p>NEXT POKEMON</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </S.HeaderButton>
            </Link>
          </S.Header>
          <S.Name>
            #{pokemonSpecies?.id} {pokemonSpecies?.name.toUpperCase()}
          </S.Name>
          <S.Content>
            <S.DescriptionStats>
              <S.DescriptionContainer>
                <S.Description>
                  {pokemonSpecies?.flavor_text_entries
                    .find((entry) => entry.language.name === 'en')
                    ?.flavor_text.replace(/\f/g, ' ')}
                </S.Description>
                <div>
                  {pokemon.types.map((type) => (
                    <TypeCard key={type.type.name} typeName={type.type.name} />
                  ))}
                </div>
              </S.DescriptionContainer>
              <StatsChart stats={pokemon.stats} />
            </S.DescriptionStats>
            {pokemonSpecies ? <Evolution url={pokemonSpecies?.evolution_chain.url} /> : null}
          </S.Content>
        </S.Wrapper>
      ) : null}
    </S.Container>
  );
};

export default Pokemon;

export const PokemonSkeleton = () => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header type="normal">
          <S.HeaderButton>
            <FontAwesomeIcon icon={faAngleLeft} />
            <p>PREV POKEMON</p>
          </S.HeaderButton>
          <S.MainImage type="normal">
            <Skeleton width={200} height={200} circle baseColor={colors.lightGray} />
          </S.MainImage>

          <S.HeaderButton>
            <p>NEXT POKEMON</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </S.HeaderButton>
        </S.Header>
        <S.Name>
          <Skeleton width={180} baseColor={colors.lightGray} height={45} />
        </S.Name>
        <S.Content>
          <S.DescriptionStats>
            <S.DescriptionContainer>
              <div>
                <Skeleton width={300} height={150} baseColor={colors.lightGray} />
              </div>
              <div>
                <S.TypeSkeleton width={300} height={35} baseColor={colors.lightGray} />
                <S.TypeSkeleton width={300} height={35} baseColor={colors.lightGray} />
              </div>
            </S.DescriptionContainer>
            <Skeleton width={330} height={330} baseColor={colors.lightGray} />
          </S.DescriptionStats>
          <Skeleton width={250} height={35} baseColor={colors.lightGray} />

          <EvolutionSkeleton />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};
