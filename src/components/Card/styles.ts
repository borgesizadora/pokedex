import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors, boxShadow } }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 3px solid ${colors.lightestGray};
  background-color: ${colors.black};
  width: 250px;
  height:100%;
  border-radius: 12px;
  text-transform: capitalize;
  box-shadow: ${boxShadow.dark};
  position: relative;
  cursor: pointer;
  overflow: hidden;
  gap: 18px;
  transition: transform .2s;
  
  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
  & img {
    max-width: 100px;
    max-height: 100px;
    `}
`;
export const Header = styled.div<{ secondary: string }>`
  ${({ theme: { boxShadow }, secondary }) => css`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${secondary};
    margin-bottom: 8px;
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
