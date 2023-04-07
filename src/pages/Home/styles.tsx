import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    margin: 8rem 1rem;
    border-radius: 8px;
    position: relative;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    background-color: ${colors.lightGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${colors.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
  `}
`;

export const IntroCard = styled.div`
  ${({ theme: { colors, boxShadow } }) => css`
    background-color: ${colors.white};
    border-radius: 16px;
    max-width: 37rem;
    padding: 2rem;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    box-shadow: ${boxShadow.dark};
    & > p {
      color: ${colors.darkGray};
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}
`;
