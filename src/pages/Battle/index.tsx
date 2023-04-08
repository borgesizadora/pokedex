import { useEffect, useState } from 'react';

import { BattlePkmBack } from '~/components/BattlePkmBack';
import { BattlePkmFront } from '~/components/BattlePkmFront';
import { Pokemon } from '~/models/Pokemon';
import { getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';

import * as S from './styles';

export const Battle = () => {
  const [pokemon1, setPokemon1] = useState<Pokemon>();
  const [pokemon2, setPokemon2] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async (pokemon: string[]) => {
      const res1 = await getPokemonByIdOrName(pokemon[0]);
      const res2 = await getPokemonByIdOrName(pokemon[1]);
      setPokemon1(res1);
      setPokemon2(res2);
    };
    fetchPokemon(['3', '59']);
  }, []);
  return (
    <S.Container>
      <S.Wrapper>
        <S.ComingSoon>Coming soon</S.ComingSoon>
        <S.Content>
          {pokemon1 && <BattlePkmFront pokemon={pokemon1} />}
          {pokemon2 && <BattlePkmBack pokemon={pokemon2} />}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};
