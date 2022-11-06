import styled, { css } from 'styled-components';

import Layout from '../LayoutPokedexRight';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
  `}
`;

export const OuterLayout = styled(Layout)`
  ${({ theme: { colors } }) => css`
    transform: scale(1.05);
    position: absolute;
    filter: brightness(80%);
    top: 0;
    z-index: -1;
  `}
`;
export const WeightHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WeightHeight = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${colors.green};
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    text-transform: none;
    border-top: 1px solid ${colors.mediumGray};
    border-right: 1px solid ${colors.mediumGray};
    font-weight: 600;
  `}
`;
export const DataAndBallWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 25px 20px 35px;
  font-size: 14px;
`;

export const YellowBall = styled.span`
  ${({ theme: { colors } }) => css`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    transform: scale(0.7);
    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: 8px;
      width: 55px;
      height: 55px;
      background: ${colors.yellow};
      border-radius: 50%;
      border: solid ${colors.darkYellow};
      border-width: 0px 3px 8px 7px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${colors.white};
      top: 15px;
      opacity: 0.8;
    }
  `}
`;
