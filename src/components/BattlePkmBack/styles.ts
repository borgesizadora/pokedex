import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-100px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`;

export const PokemonWrapper = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 25rem;
    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  `}
`;

export const PokemonData = styled.span`
  ${({ theme: { colors, boxShadow, breakpoints } }) => css`
    border-radius: 32px 6px;
    padding: 1.5rem;
    border: 2px solid ${colors.lightGray};
    box-shadow: ${boxShadow.dark};
    background: ${colors.white};
    align-self: flex-end;
    width: 500px;
    max-width: calc(100vw - 2rem);
    margin-bottom: 2rem;
    text-align: end;
    @media (max-width: ${breakpoints.md}) {
      align-self: flex-start;
    }
    & h2 {
      font-size: 1.2rem;
    }
  `}
`;

export const PokeGround = styled.div`
  ${({ theme: { breakpoints } }) => css`
    align-self: center;
    @media (max-width: ${breakpoints.md}) {
      align-self: flex-start;
    }
  `}
`;

export const Pokemon2 = styled.div`
  animation: ${bounce} 2s ease;
  margin-bottom: -150px;

  & > img {
    width: 80%;
    max-width: 350px;
  }
`;

export const GroundBottom = styled.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: relative;
  z-index: -1;
`;
