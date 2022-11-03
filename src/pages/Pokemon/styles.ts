import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    background-color: ${colors.lightestGray};
    margin: 38px;
    border-radius: 8px;
    overflow: hidden;
    color: ${colors.darkGray};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    background-color: ${colors.lightestGray};
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const Header = styled.div`
  ${({ theme: { colors, boxShadow } }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: ${colors.lightestGray};
    color: ${colors.black};
    align-items: stretch;
    box-shadow: ${boxShadow.dark};
    h1 {
      padding: 12px 0;
      font-size: 1.5rem;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const HeaderButton = styled.div`
  ${({ theme: { colors, boxShadow } }) => css`
    color: ${colors.mediumBlue};
    font-weight: bold;
    border: 2px solid ${colors.mediumBlue};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${boxShadow.light};
    border-radius: 8px;
    width: 200px;
    padding: 0 12px;
    & > p {
      flex: 1;
    }
  `}
`;

export const MainImage = styled.div`
  ${({ theme: { boxShadow } }) => css`
    width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 32px;
    & img {
      padding: 32px;
      border-radius: 8px;
      box-shadow: ${boxShadow.dark};
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Description = styled.p`
  width: 300px;
  text-align: justify;
`;
