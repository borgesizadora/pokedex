import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Evolution from '~/components/Evolution';
import { PokemonSpecies } from '~/models/Pokemon';
import { getPokemonSpecies } from '~/services/Pokemon/pokemonRequests';

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';

const Pokemon = () => {
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();

  const params = useParams();

  const fetchPokemonSpecies = async () => {
    if (params?.id) {
      const res = await getPokemonSpecies(Number(params.id));
      setPokemonSpecies(res);
    }
  };
  useEffect(() => {
    fetchPokemonSpecies();
  }, [params.id]);

  return (
    <S.Wrapper>
      {params.id ? (
        <>
          <S.Header>
            <Link to={`/pokemon/${Number(params.id) > 1 ? Number(params.id) - 1 : 1}`}>
              <S.HeaderButton>
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>PREV POKEMON</p>
              </S.HeaderButton>
            </Link>
            <h1>
              #{pokemonSpecies?.id} {pokemonSpecies?.name.toUpperCase()}
            </h1>
            <Link to={`/pokemon/${Number(params.id) + 1}`}>
              <S.HeaderButton>
                <p>NEXT POKEMON</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </S.HeaderButton>
            </Link>
          </S.Header>
          {pokemonSpecies ? <Evolution url={pokemonSpecies?.evolution_chain.url} /> : null}
        </>
      ) : null}
    </S.Wrapper>
  );
};

export default Pokemon;
