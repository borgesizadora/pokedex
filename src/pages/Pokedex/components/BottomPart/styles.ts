import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const TopBtnsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 50px;
  justify-content: space-around;
`;

export const RoundButton = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    background: ${colors.black};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    &::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 4px;
      background: ${colors.darkGray};
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
  `}
`;
export const CenterBtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const CenterBtn = styled.div<{ color: string }>`
  ${({ theme: { colors }, color }) => css`
    background: ${color};
    height: 10px;
    width: 50px;
    border-radius: 5px;
    border-bottom: 1px solid ${colors.black};
    border-left: 1px solid ${colors.black};
  `}
`;
export const TypeWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 50px;
    left: 40px;
    background: ${colors.green};
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 12px 0;
    border-radius: 8px;
    gap: 8px;
    text-transform: capitalize;
    border-top: 1px solid ${colors.mediumGray};
    border-right: 1px solid ${colors.mediumGray};
    padding: 12px;
  `}
`;
