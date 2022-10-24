import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 370px;
    height: 460px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 0 15px 15px 0;
  `}
`;

export const Header = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.pokedexMedium};
    width: 150px;
    height: 60px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 45px solid transparent;
      border-bottom: 45px solid transparent;
      border-left: 45px solid ${colors.pokedexMedium};
      right: -35px;
      top: 0;
      transform: rotate(135deg);
    }
  `}
`;

export const Body = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.pokedexMedium};
    width: 100%;
    height: 450px;
    margin-bottom: 20px;
    border-radius: 0 15px 0 0;
    padding: 20px;
  `}
`;
