import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px;
`;

export const Title = styled.h2`
  ${({ theme: { colors } }) => css`
    color: ${colors.darkBlue};
    margin-bottom: 1.2rem;
    font-family: 'Lato', sans-serif;
  `}
`;

export const EvolutionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const EvolutionCard = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  margin: 1rem;
`;

export const LastEvolutionGroup = styled.div<{ showShadow?: boolean; hasManyEvolutions?: boolean }>`
  ${({ hasManyEvolutions, showShadow, theme: { boxShadow } }) => css`
    padding: 24px ${showShadow ? '24px' : 0};
    display: flex;
    flex-direction: ${hasManyEvolutions ? 'row' : 'column'};
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 8px;
    box-shadow: ${showShadow ? boxShadow.dark : ''};
  `}
`;
