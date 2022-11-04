import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    color: ${colors.black};
  `}
`;

export const EvolutionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
`;
export const EvolutionCard = styled.div`
  display: flex;
  align-items: center;
`;

export const LastEvolutionGroup = styled.div<{ showShadow?: boolean; hasManyEvolutions?: boolean }>`
  ${({ hasManyEvolutions, showShadow, theme: { boxShadow } }) => css`
    padding: 24px ${showShadow ? '24px' : 0};
    display: flex;
    flex-direction: ${hasManyEvolutions ? 'row' : 'column'};
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 8px;
    box-shadow: ${showShadow ? boxShadow.dark : ''};
  `}
`;
