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
    background-color: ${colors.black};
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 5;
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
  & > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const LinkContainer = styled.li`
  ${({ theme: { colors, spacing } }) => css`
    & svg {
      color: ${colors.white};
    }
    & > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem 0;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 400;
      height: ${spacing.headerSpacing};
      display: flex;
      align-items: center;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transition: all 300ms;
      min-width: 7rem;
      &:hover,
      &.active {
        border-bottom: 2px solid ${colors.lightBlue};
        background-color: ${colors.darkGray};
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
    width: 45px;
    height: 45px;
    border-radius: 99px;
    line-height: 0;
    color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  border: 1px solid red;
  height: 100vh;
  opacity: 0.1;
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
  align-items: end;
  padding: 2rem 0 2rem 1rem;
  gap: 1rem;
`;
export const NavigatioMenuLi = styled.li`
  ${({ theme: { colors, boxShadow } }) => css`
    border-radius: 99px 0 0 99px;
    background: ${colors.darkGray};
    box-shadow: ${boxShadow.dark};
    width: 80%;
    & > a {
      height: 100%;
      padding: 1rem;
      color: ${colors.white};
      font-weight: 500;
      display: block;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      &.active {
        border-radius: 99px 0 0 99px;
        border: 3px solid ${colors.white};
        border-right: 0;
      }
    }
  `}
`;

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  ${({ theme: { colors, boxShadow } }) => css`
    width: 100vw;
    position: fixed;
    left: -16px;
    margin-top: 7px;
    background-color: ${colors.black};
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
