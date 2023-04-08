import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`;

export const PokemonWrapper = styled.div`
  display: flex;
  height: 25rem;
`;

export const PokemonData = styled.span`
  ${({ theme: { colors, boxShadow } }) => css`
    border-radius: 6px 32px;
    padding: 1.5rem;
    border: 2px solid ${colors.lightGray};
    box-shadow: ${boxShadow.dark};
    background: ${colors.white};
    align-self: flex-start;
    width: 500px;
    display: flex;
    flex-direction: column;
    text-align: start;
    & h2 {
      font-size: 1.2rem;
    }
  `}
`;

export const PokeGround = styled.div`
  align-self: center;
`;

export const Pokemon = styled.div`
  animation: ${bounce} 2s ease;
  animation-delay: 1s;
  margin-bottom: -170px;
  z-index: 2;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`;

export const GroundTop = styled.img`
  position: relative;
  z-index: -1;
`;
