import styled, { css } from "styled-components";
import { PokemonType } from "~/models/PokemonType";

export const Wrapper = styled.div<{ typeName: PokemonType }>`
  ${({ theme: { typesColors, boxShadow }, typeName }) => css`
    border: 2px solid ${typesColors[typeName].primaryColor};
    background-color: ${typesColors[typeName].secondaryColor};
    padding: 3px;
    border-radius: 5px;
    font-weight: bold;
    width: 60%;
    text-shadow: ${boxShadow.dark};
  `}
`;
