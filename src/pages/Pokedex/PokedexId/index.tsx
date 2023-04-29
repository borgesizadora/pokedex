import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '~/components/Loader';
import { Pokemon as PokeType } from '~/models/Pokemon';
import { getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PokedexLayout from '../components/PokedexLayout';
import * as S from './styles';

const PokedexId = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokeType>();

  const params = useParams();

  const fetchPokemon = async () => {
    setIsLoading(true);
    const res = await getPokemonByIdOrName(Number(params.id));
    setPokemon(res);
    if (res) setIsLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <S.Container>
      <S.IntroCard>
        <p>
          Here&#39;s a classic way to view Pokemon stats. Move from one Pokemon to the next clicking
          the direction keys on the pokedex.
        </p>
      </S.IntroCard>
      <S.Wrapper>
        <PokedexLayout pokemon={pokemon} isLoading={isLoading} />
      </S.Wrapper>
      <S.Warning>
        <FontAwesomeIcon icon={faCircleInfo} size={'1x'} />
        This Pokedex was designed entirely using HTML and CSS code.
      </S.Warning>
    </S.Container>
  );
};

export default PokedexId;
