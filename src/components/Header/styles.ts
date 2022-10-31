import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme: colors }) => css`
    width: 100%;
    height: 65px;
    border-bottom: 2px solid ${colors.colors.lightestGray};
    background-color: ${colors.colors.lightGray};
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 3;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0 85px;
    }
  `}
`;

export const LogoWrapper = styled.div`
  justify-self: flex-start;
  & img {
    max-width: 120px;
  }
`;

export const LinksWrapper = styled.ul`
  ${({ theme: colors }) => css`
    display: flex;
    gap: 32px;
    & a {
      font-size: 1.2rem;
      font-weight: bold;
      height: 65px;
      display: flex;
      align-items: center;
      border-bottom: 3px solid transparent;
      padding: 0 15px;
      transition: all 300ms;
      &:hover {
        border-bottom: 3px solid ${colors.colors.lightBlue};
        background-color: ${colors.colors.mediumGray};
      }
    }
  `}
`;
