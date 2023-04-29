import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button {
    all: unset;
    cursor: pointer;
  }
`;
export const ButtonContainer = styled.div`
  position: relative;
`;

export const Button = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${colors.darkGray};
    z-index: 2;
  `}
`;

export const ButtonShaddow = styled.div`
  ${({ theme: { colors } }) => css`
    width: 25px;
    height: 25px;
    background: ${colors.black};
    position: relative;
    right: 4px;
    top: 4px;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-left: 3px solid ${colors.black};
      left: 2px;
      top: -4px;
      transform: rotate(45deg);
    }
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 4px solid ${colors.black};
      right: -2px;
      bottom: -1px;
      transform: rotate(90deg);
    }
  `}
`;

export const HorizontalBtnsContainer = styled.div`
  display: flex;
`;
