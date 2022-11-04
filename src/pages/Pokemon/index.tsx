import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Evolution from '~/components/Evolution';
import Loader from '~/components/Loader';
import StatsChart from '~/components/StatsChart';
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
  const { colors } = useTheme();

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
      {isLoading ? (
        <Loader color={colors.black} />
      ) : params.id && pokemon ? (
        <S.Wrapper>
          <S.Header>
            <Link to={`/pokemon/${Number(pokemon?.id) > 1 ? Number(pokemon?.id) - 1 : 1}`}>
              <S.HeaderButton>
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>PREV POKEMON</p>
              </S.HeaderButton>
            </Link>
            <h1>
              #{pokemonSpecies?.id} {pokemonSpecies?.name.toUpperCase()}
            </h1>
            <Link to={`/pokemon/${Number(pokemon.id) + 1}`}>
              <S.HeaderButton>
                <p>NEXT POKEMON</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </S.HeaderButton>
            </Link>
          </S.Header>
          <S.Description>
            {pokemonSpecies?.flavor_text_entries
              .find((entry) => entry.language.name === 'en')
              ?.flavor_text.replace(/\f/g, ' ')}
          </S.Description>
          <S.MainImage>
            <img
              src={
                pokemon.sprites.other['official-artwork'].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
          </S.MainImage>
          <StatsChart stats={pokemon.stats} />
          {pokemonSpecies ? <Evolution url={pokemonSpecies?.evolution_chain.url} /> : null}
        </S.Wrapper>
      ) : null}
    </S.Container>
  );
};

export default Pokemon;
