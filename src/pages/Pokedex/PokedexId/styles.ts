import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  border-radius: 8px;
  position: relative;
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
    background-color: ${colors.lightGray};
    border-radius: 32px;
    overflow: hidden;
    gap: 2rem;
    color: ${colors.darkGray};
    padding-bottom: 3rem;
    padding-top: 6rem;
    padding: 6rem;
    @media (max-width: ${breakpoints.lg}) {
      padding: 6rem 1rem;
    }
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

export const ImgWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    width: 450px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${colors.black};
    margin: 0 auto;
    & > img {
      width: 250px;
      max-height: 80%;
    }
  `}
`;

export const Warning = styled.span`
  align-self: flex-end;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  font-size: 0.8rem;
  & > svg {
    margin-top: 0.4rem;
  }
`;
