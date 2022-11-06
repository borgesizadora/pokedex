import { Pokemon } from '~/models/Pokemon';

import Layout from '../LayoutPokedexRight';
import Screen from '../Screen';
import * as S from './styles';

const PokedexRight: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <S.Wrapper>
      <Layout>
        <>
          <Screen pokemon={pokemon} />
          <S.DataAndBallWrapper>
            <S.WeightHeightContainer>
              <S.WeightHeight> HEIGHT - {pokemon.height} dm</S.WeightHeight>
              <S.WeightHeight> WEIGHT - {pokemon.weight} hg</S.WeightHeight>
            </S.WeightHeightContainer>
            <S.YellowBall />
          </S.DataAndBallWrapper>
        </>
      </Layout>
      <S.OuterLayout />
    </S.Wrapper>
  );
};

export default PokedexRight;
