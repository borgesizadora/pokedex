import { PokemonType } from '~/models/PokemonType';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ typeName: PokemonType }>`
  ${({ theme: { typesColors, boxShadow }, typeName }) => css`
    border: 2px solid ${typesColors[typeName].primaryColor};
    background-color: ${typesColors[typeName].secondaryColor};
    padding: 3px;
    border-radius: 5px;
    font-weight: bold;
    width: 100%;
    text-shadow: ${boxShadow.dark};
  `}
`;
