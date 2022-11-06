import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import Evolution from '~/components/Evolution';
import Loader from '~/components/Loader';
import StatsChart from '~/components/StatsChart';
import { getPokemonSpecies, getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

const Pokemon = () => {
  const params = useParams();
  const { colors } = useTheme();

  const { isFetching: isFetchingSpecies, data: pokemonSpeciesData } = useQuery(
    ['pokemonSpecies', params.id],
    () => getPokemonSpecies(params.id!)
  );

  const { isFetching: isFetchingPokemon, data: pokemonPokemonData } = useQuery(
    ['pokemon', params.id],
    () => getPokemonByIdOrName(params.id!)
  );

  return (
    <S.Container>
      {isFetchingSpecies || isFetchingPokemon ? (
        <Loader color={colors.black} />
      ) : params.id && pokemonPokemonData ? (
        <S.Wrapper>
          <S.Header>
            <Link
              to={`/pokemon/${
                Number(pokemonPokemonData?.id) > 1 ? Number(pokemonPokemonData?.id) - 1 : 1
              }`}>
              <S.HeaderButton>
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>PREV POKEMON</p>
              </S.HeaderButton>
            </Link>
            <h1>
              #{pokemonSpeciesData?.id} {pokemonSpeciesData?.name.toUpperCase()}
            </h1>
            <Link to={`/pokemon/${Number(pokemonPokemonData.id) + 1}`}>
              <S.HeaderButton>
                <p>NEXT POKEMON</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </S.HeaderButton>
            </Link>
          </S.Header>
          <S.Description>
            {pokemonSpeciesData?.flavor_text_entries
              .find((entry) => entry.language.name === 'en')
              ?.flavor_text.replace(/\f/g, ' ')}
          </S.Description>
          <S.MainImage>
            <img
              src={
                pokemonPokemonData.sprites.other['official-artwork'].front_default ||
                pokemonPokemonData.sprites.front_default
              }
              alt={pokemonPokemonData.name}
            />
          </S.MainImage>
          <StatsChart stats={pokemonPokemonData.stats} />
          {pokemonSpeciesData ? <Evolution url={pokemonSpeciesData?.evolution_chain.url} /> : null}
        </S.Wrapper>
      ) : null}
    </S.Container>
  );
};

export default Pokemon;
