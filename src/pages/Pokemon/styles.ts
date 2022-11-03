import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - ${spacing.headerSpacing} - 76px);
    background-color: ${colors.lightestGray};
    margin: 38px;
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
