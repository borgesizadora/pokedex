import styled, { css } from 'styled-components';

export const Container = styled.div<{ light: boolean }>`
  ${({ light, theme: { boxShadow, colors } }) => css`
    border: ${light ? '' : `3px solid ${colors.lightestGray}`};
    background-color: ${light ? colors.white : colors.black};
    border-radius: 6px 36px;

    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: ${boxShadow.dark};
    &:hover {
      position: relative;
      transform: scale(1.1);
      z-index: 2;
    }
  `}
`;

export const Wrapper = styled.div<{ light: boolean }>`
  ${({ light, theme: { colors } }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  width: 250px;
  height:250px;
  text-transform: capitalize;
  position: relative;
  gap: 18px;
background-color: ${light ? colors.white : ''};
  
  & img {
    max-width: 100px;
    max-height: 100px;
    `}
`;
export const Header = styled.div<{ secondary: string }>`
  ${({ theme: { boxShadow, colors }, secondary }) => css`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${secondary};
    margin-bottom: 8px;
    color: ${colors.white};
    & > h3 {
      text-shadow: ${boxShadow.dark};
    }
  `}
`;

export const Number = styled.div`
  ${({ theme: { colors, boxShadow } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 14px;
    opacity: 0.9;
    width: 35px;
    height: 35px;
    font-weight: bold;
    position: absolute;
    left: 15px;
    padding: 5px;
    border-radius: 50%;
    color: ${colors.darkGray};
    box-shadow: ${boxShadow.dark};
  `}
`;

export const TypeCardWrapper = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
