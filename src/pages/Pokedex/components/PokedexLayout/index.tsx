import { useEffect, useState } from 'react';

import { Pokemon } from '~/models/Pokemon';
import { useTheme } from 'styled-components';

import BottomPart from '../BottomPart';
import PokedexRight from '../PokedexRight';
import * as S from './styles';
import './styles.css';

interface IPokedexLayout {
  pokemon: Pokemon;
}

const PokedexLayout: React.FC<IPokedexLayout> = ({ pokemon }) => {
  const { colors } = useTheme();
  const [isPokedexOpen, setIspokedexOpen] = useState(false);

  const handleClosePokedex = () => setIspokedexOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIspokedexOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <S.Wrapper className={`pokedex ${isPokedexOpen ? 'open' : ''}`}>
        <S.PokedexLeft className="pokedex-left">
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
          <BottomPart types={pokemon.types} handleClosePokedex={handleClosePokedex} />
        </S.PokedexLeft>
        <PokedexRight pokemon={pokemon} />
      </S.Wrapper>
    </>
  );
};

export default PokedexLayout;
