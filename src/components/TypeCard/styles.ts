import { PokemonType } from '~/models/PokemonType';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ typeName: PokemonType }>`
  ${({ theme: { typesColors, boxShadow, colors }, typeName }) => css`
    border: 2px solid ${typesColors[typeName].primaryColor};
    background-color: ${typesColors[typeName].secondaryColor};
    padding: 3px;
    border-radius: 99px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${boxShadow.dark};
    color: ${colors.white};
  `}
`;
