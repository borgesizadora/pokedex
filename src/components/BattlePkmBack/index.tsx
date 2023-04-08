import groundTop from '~/assets/groundTop.svg';
import { Pokemon } from '~/models/Pokemon';

import { ProgressBar } from '../ProgressBar';
import * as S from './styles';

interface IBattlePkmBack {
  pokemon: Pokemon;
}

export const BattlePkmBack = ({ pokemon }: IBattlePkmBack) => {
  return (
    <S.PokemonWrapper>
      <S.PokeGround>
        <S.Pokemon2>
          <img src={pokemon?.sprites.back_default} alt="" />
        </S.Pokemon2>

        <S.GroundBottom src={groundTop} alt="" width={400} />
      </S.PokeGround>
      <S.PokemonData>
        <h2>{pokemon.name.toUpperCase()}</h2>

        <ProgressBar
          isBattle
          name={pokemon.stats[0].stat.name}
          maxValue={pokemon.stats[0].base_stat}
          currentValue={pokemon.stats[0].base_stat - 30}
        />
      </S.PokemonData>
    </S.PokemonWrapper>
  );
};
