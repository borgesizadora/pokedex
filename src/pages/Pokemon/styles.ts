import Skeleton from 'react-loading-skeleton';

import { PokemonType } from '~/models/PokemonType';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    margin: 38px 10px;
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    background-color: ${colors.mediumGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${colors.darkGray};
    padding-bottom: 3rem;
  `}
`;

export const Content = styled.div`
  ${({ theme: { colors } }) => css`
    min-width: 80%;
    min-height: 58rem;
    background: ${colors.lightestGray};
    padding: 4rem;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  `}
`;
export const DescriptionStats = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: space-around;
    align-items: stretch;

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `}
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-around;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Description = styled.p`
  ${({ theme: { colors, breakpoints } }) => css`
    width: 300px;
    padding: 2rem;
    border-radius: 8px;
    background: ${colors.lightGray};
    font-weight: 500;
    @media (max-width: ${breakpoints.md}) {
      margin-bottom: 1rem;
    }
  `}
`;

export const Header = styled.div<{ type: PokemonType }>`
  ${({ type, theme: { colors, typesColors } }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: ${typesColors[type].primaryColor};
    filter: saturate(60%);
    color: ${colors.black};
    align-items: center;
    min-height: 150px;
    position: relative;
    margin-bottom: 6rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const HeaderButton = styled.div`
  ${({ theme: { colors, breakpoints } }) => css`
    color: ${colors.lightestGray};
    font-weight: bold;
    border: 2px solid ${colors.darkBlue};
    background: ${colors.darkBlue};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    width: 200px;
    height: 3rem;
    padding: 0 12px;
    & > p {
      flex: 1;
    }
    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  `}
`;
export const HeaderButtonMobile = styled.div<{ isRight?: boolean }>`
  ${({ isRight = false, theme: { colors, breakpoints } }) => css`
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.darkBlue};
    border-radius: 99px;
    position: absolute;
    top: 8rem;
    ${isRight ? 'right: 0.2rem;' : 'left: 0.2rem;'}
    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  `}
`;

export const MainImage = styled.div<{ type: PokemonType }>`
  ${({ type, theme: { colors, typesColors, boxShadow } }) => css`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 35px;
    border-radius: 50%;
    background: ${colors.lightestGray};
    border: 16px solid;
    border-radius: 50%;
    border-color: ${typesColors[type].primaryColor} ${colors.mediumGray} ${colors.mediumGray}
      ${typesColors[type].primaryColor};
    transform: rotate(45deg);
    box-shadow: ${boxShadow.dark};

    & img {
      transform: rotate(-45deg);
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  `}
`;

export const Name = styled.h1`
  font-family: 'Lato', sans-serif;
`;

export const TypeSkeleton = styled(Skeleton)`
  border-radius: 99px;
`;
