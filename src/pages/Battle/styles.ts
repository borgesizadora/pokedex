import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  border-radius: 99px;
  position: relative;
  background-color: white;
  max-width: 70rem;
`;

export const Wrapper = styled.div`
  ${({ theme: { colors, spacing, breakpoints } }) => css`
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - (76px + 16rem;));
    background-color: ${colors.white};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${colors.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
    padding: 6rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        ${colors.white},
        ${colors.white},
        ${colors.grassGreenLight},
        ${colors.grassGreenDark}
      );
      opacity: 0.8;
    }
    @media (max-width: ${breakpoints.lg}) {
      padding: 6rem 1rem;
    }
  `}
`;

export const Content = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ComingSoon = styled.span`
  ${({ theme: { colors } }) => css`
    position: absolute;
    width: 300px;
    z-index: 3;
    transform: rotate(45deg);
    padding: 1rem;
    top: 30px;
    font-size: 1.2rem;
    right: -90px;
    font-weight: 500;
    background: ${colors.yellowMedium};
  `}
`;
