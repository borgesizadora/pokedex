import { css } from "styled-components";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;
export const PokedexLeft = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.pokedexMedium};
    width: 400px;
    height: 550px;
    border-radius: 35px 10px 18px 35px;
    border-left: 15px solid ${colors.pokedexDark};
    border-bottom: 10px solid ${colors.pokedexDark};
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      border: 1px solid ${colors.pokedexDarkest};
      height: 520px;
      width: 45px;
      position: absolute;
      z-index: 3;
      top: 20px;
      right: 0;
      border-radius: 15px 15px 0 0;
      background: linear-gradient(
        90deg,
        ${colors.pokedexLight} 0%,
        ${colors.pokedexMedium} 35%,
        ${colors.pokedexDark} 100%
      );
    }
    &::after {
      content: "";
      background-color: ${colors.pokedexDarkest};
      position: absolute;
      bottom: -10px;
      right: 0;
      height: 20px;
      width: 47px;
      border-radius: 50%;
      z-index: 3;
    }
  `}
`;
export const Header = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    width: 150px;
    height: 100px;
    background: ${colors.pokedexLight};
    border-top-left-radius: 35px;
    z-index: 2;
    margin-bottom: 30px;

    &::before {
      content: "";
      background: ${colors.pokedexLight};
      width: 100px;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotateZ(45deg);
      transform-origin: bottom right;
    }
    & > div  {
      border-top-left-radius: 35px;
      border-top-right-radius: 15px;
      content: "";
      background: ${colors.pokedexLight};
      width: 385px;
      height: 50px;
      z-index:1;
      
  `}
`;

export const BlueBall = styled.span`
  ${({ theme: { colors } }) => css`
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: ${colors.white};
    top: 0;
    left: 0;
    margin: 10px;
    transform: scale(0.9);
    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 8px;
      width: 55px;
      height: 55px;
      background: ${colors.lightBlue};
      border-radius: 50%;
      border: solid ${colors.mediumBlue};
      border-width: 0px 3px 8px 7px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${colors.white};
      top: 10px;
      opacity: 0.8;
    }
  `}
`;

export const SmallBallsContainer = styled.span`
  position: absolute;
  top: 20px;
  margin-left: 95px;
  display: flex;
  gap: 10px;
`;

export const SmallBall = styled.span<{ color: string }>`
  ${({ theme: { colors }, color }) => css`
    position: relative;
    background: ${color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid ${colors.mediumGray};
    border-width: 0 0 2px 1px;

    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${colors.white};
      top: 1px;
      right: 3px;
      opacity: 0.8;
    }
  `}
`;

export const HeaderShadow = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    width: 150px;
    height: 100px;
    background: ${colors.pokedexDarkest};
    border-top-left-radius: 35px;
    top: 20px;
    z-index:1;
    top: 12px;

    &::before {
      content: "";
      background: ${colors.pokedexDarkest};
      width: 100px;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotateZ(45deg);
      transform-origin: bottom right;
    }
    & > div  {
      border-top-left-radius: 35px;
      border-top-right-radius: 15px;
      content: "";
      background: ${colors.pokedexDarkest};
      width: 385px;
      height: 50px;
      z-index:1;
      
  `}
`;

export const ScreenWrapper = styled.div`
  position: relative;
`;

export const Screen = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${colors.lightGray};
    padding: 30px;
    width: 250px;
    height: 200px;
    margin-left: 45px;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  `}
`;
export const ScreenShadow = styled.div`
  ${({ theme: { colors } }) => css`
      position: absolute;
      margin-left: 45px;
      z-index: 1;
      left: -7px;
      top: 0px;
      background: ${colors.mediumGray};
      width: 257px;
      height: 207px;
      border-radius: 8px 12px 8px 12px;
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme: { colors } }) => css`
  width: 100%;
  height: 100%;   
  border-radius: 8px;
  background-color: ${colors.pokedexGreen};
  border-top: 1px solid ${colors.mediumGray};
  border-right:1px solid ${colors.mediumGray};
  color: ${colors.darkGray};
  & img {
    max-width: 60%;
    max-height: 60%;
  }
  & p {
    text-transform: uppercase;
    font-weight: bold;
  }
    }
  `}
`;
