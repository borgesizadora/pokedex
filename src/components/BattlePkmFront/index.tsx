import groundTop from '~/assets/groundTop.svg';
import { Pokemon } from '~/models/Pokemon';

import { ProgressBar } from '../ProgressBar';
import * as S from './styles';

interface IBattlePkmFront {
  pokemon: Pokemon;
}
export const BattlePkmFront = ({ pokemon }: IBattlePkmFront) => {
  return (
    <S.PokemonWrapper>
      <S.PokemonData>
        <h2>{pokemon.name.toLocaleUpperCase()}</h2>
        <ProgressBar
          isBattle
          name={pokemon.stats[0].stat.name}
          maxValue={pokemon.stats[0].base_stat}
          currentValue={pokemon.stats[0].base_stat}
        />
      </S.PokemonData>
      <S.PokeGround>
        <S.Pokemon>
          <img src={pokemon?.sprites.front_default} alt="" />
        </S.Pokemon>

        <S.GroundTop src={groundTop} alt="" width={400} />
      </S.PokeGround>
    </S.PokemonWrapper>
  );
};
