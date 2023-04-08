import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { boxShadow, colors } }) => css`
    box-shadow: ${boxShadow.dark};
    padding: 24px 18px;
    border-radius: 8px;
    color: ${colors.darkGray};
    & h3 {
      margin-bottom: 8px;
    }
  `}
`;

export const AllSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkillContainer = styled.div`
  text-align: start;
  font-weight: bold;
  font-size: 0.875rem;
`;

export const Text = styled.div`
  margin-bottom: -3px;
`;

export const SkillBar = styled.div<{ value: number }>`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
`;

export const SkillValue = styled.div<{ value: number }>`
  ${({ value, theme: { colors } }) => css`
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
      }
    }
  `}
`;
