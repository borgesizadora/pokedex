import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px;
`;

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.darkBlue};
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
  `}
`;

export const EvolutionWrapper = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.lg}) {
      flex-direction: column;
    }
  `}
`;
export const EvolutionCard = styled.div`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.lg}) {
      flex-direction: column;
    }
  `}
`;

export const IconWrapper = styled.span`
  ${({ theme: { breakpoints } }) => css`
    margin: 1rem;
    @media (max-width: ${breakpoints.lg}) {
      transform: rotate(90deg);
    }
  `}
`;

export const LastEvolutionGroup = styled.div<{ showShadow?: boolean; hasManyEvolutions?: boolean }>`
  ${({ hasManyEvolutions, showShadow, theme: { boxShadow } }) => css`
    ${showShadow && 'padding: 24px;'}
    display: flex;
    flex-direction: ${hasManyEvolutions ? 'row' : 'column'};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 32px;
    box-shadow: ${showShadow ? boxShadow.dark : ''};
  `}
`;
