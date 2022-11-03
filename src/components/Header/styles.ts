import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    height: ${spacing.headerSpacing};
    border-bottom: 2px solid ${colors.lightestGray};
    background-color: ${colors.lightGray};
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 3;
    padding: 0 16px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
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
  ${({ theme: { colors, spacing } }) => css`
    display: flex;
    gap: 32px;
    & a {
      font-size: 1.2rem;
      font-weight: bold;
      height: ${spacing.headerSpacing};
      display: flex;
      align-items: center;
      border-bottom: 3px solid transparent;
      padding: 0 15px;
      transition: all 300ms;
      &:hover {
        border-bottom: 3px solid ${colors.lightBlue};
        background-color: ${colors.mediumGray};
      }
    }
  `}
`;
