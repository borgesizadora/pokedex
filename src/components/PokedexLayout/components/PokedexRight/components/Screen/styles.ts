import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    border: 8px solid ${colors.pokedexDark};
    margin: 10px auto;
    width: 80%;
    border-radius: 16px;
  `}
`;

export const Screen = styled.div`
  ${({ theme: { colors } }) => css`
    border-radius: 8px;
    background-color: ${colors.pokedexGreen};
    border-top: 1px solid ${colors.mediumGray};
    border-right: 1px solid ${colors.mediumGray};
    color: ${colors.darkGray};
    font-size: 12px;
    font-weight: 600;
    padding: 12px 24px;
  `}
`;

export const StatsRow = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  `}
`;
