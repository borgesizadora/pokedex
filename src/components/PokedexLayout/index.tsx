import { Pokemon } from '~/models/Pokemon';
import { useTheme } from 'styled-components';

import BottomPart from './components/BottomPart';
import PokedexRight from './components/PokedexRight';
import * as S from './styles';

interface IPokedexLayout {
  pokemon: Pokemon;
}

const PokedexLayout: React.FC<IPokedexLayout> = ({ pokemon }) => {
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      <S.PokedexLeft>
        <S.Header>
          <div />
          <S.BlueBall />
          <S.SmallBallsContainer>
            <S.SmallBall color={colors.red} />
            <S.SmallBall color={colors.yellow} />
            <S.SmallBall color={colors.green} />
          </S.SmallBallsContainer>
        </S.Header>
        <S.HeaderShadow>
          <div />
        </S.HeaderShadow>
        <S.ScreenWrapper>
          <S.Screen>
            <S.ImgContainer>
              <p>#{pokemon.id}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </S.ImgContainer>
          </S.Screen>
          <S.ScreenShadow />
        </S.ScreenWrapper>
        <BottomPart types={pokemon.types} />
      </S.PokedexLeft>
      <PokedexRight pokemon={pokemon} />
    </S.Wrapper>
  );
};

export default PokedexLayout;
