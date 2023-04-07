import styled, { css, keyframes } from 'styled-components';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const scaleOut = keyframes`
 from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`;

export const Header = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    height: ${spacing.headerSpacing};
    background-color: ${colors.mediumGray};
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
      font-size: 1rem;
      font-weight: 500;
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

export const HeaderNav = styled.nav`
  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  `}
`;

export const IconButton = styled.button`
  ${({ theme: { colors, boxShadow } }) => css`
    font-family: inherit;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${colors.darkBlue};
    background-color: ${colors.white};
    box-shadow: ${boxShadow.dark};
    border: none;
  `}
`;

export const NavigationMenuRoot = styled(NavigationMenu.Root)`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: center;
    z-index: 1;
    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  `}
`;

export const NavigationMenuList = styled(NavigationMenu.List)`
  justify-content: center;
  list-style: none;
  margin: 0;
`;

export const NavMenuTrigger = styled(NavigationMenu.Trigger)`
  ${({ theme: { colors } }) => css`
    padding: 0.8rem;
    border: none;
    border-radius: 99px;
    line-height: 0;
    color: ${colors.darkBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  ${({ theme: { colors } }) => css`
    border: 1px solid red;
    height: 100vh;
    opacity: 0.1;
  `}
`;

export const NavMenuLink = styled(NavigationMenu.Link)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: red;
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 1;
`;
export const NavigationMenuContentUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 1rem;
  gap: 1rem;
`;
export const NavigatioMenuLi = styled.li`
  ${({ theme: { colors, boxShadow } }) => css`
    border-radius: 8px;
    background: ${colors.lightGray};
    box-shadow: ${boxShadow.dark};
    & > a {
      height: 100%;
      width: 100%;
      padding: 1rem;
      color: ${colors.darkBlue};
      font-weight: 700;
      display: block;
    }
  `}
`;

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  ${({ theme: { colors, boxShadow } }) => css`
    width: 100vw;

    position: fixed;
    left: -16px;
    margin-top: 7px;
    background-color: ${colors.mediumGray};
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    box-shadow: ${boxShadow.dark};
    transition: width, height, 150ms ease;

    &[data-state='open'] {
      animation: ${scaleIn} 150ms ease;
    }
    &[data-state='closed'] {
      animation: ${scaleOut} 150ms ease;
    }
  `}
`;

export const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;
