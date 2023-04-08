import styled, { css } from 'styled-components';

export const SkillContainer = styled.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`;
export const BattleStats = styled.div`
  text-align: end;
  padding-right: 0.2rem;
`;

export const Text = styled.div`
  margin-bottom: -3px;
`;

export const SkillBar = styled.div<{ isBattle?: boolean }>`
  ${({ isBattle = false, theme: { colors } }) => css`
    width: ${isBattle ? '100%' : '300px'};
    height: 20px;
    border-radius: 15px;
    overflow: hidden;
    ${isBattle && `border: 1px solid${colors.mediumBlue};`}
  `}
`;

interface ISkillValue {
  value: number;
  maxValue?: number;
  isBattle?: boolean;
}

export const SkillValue = styled.div<ISkillValue>`
  ${({ value, maxValue = 100, isBattle = false, theme: { colors } }) => css`
    height: 100%;
    display: block;
    background-color: ${colors.mediumBlue};
    color: ${colors.white};
    font-size: 0.875rem;
    line-height: 20px;
    padding-right: 10px;
    font-weight: bold;
    text-align: end;
    border-radius: 15px;
    animation: ${'widthAnimation' + value} 1s ease forwards;
    @keyframes ${'widthAnimation' + value} {
      from {
        width: 0%;
      }
      to {
        width: ${value < 100 ? value : 100}%;
        ${isBattle && `width: ${Math.round((value / maxValue) * 100)}%;`}
      }
    }
  `}
`;
