import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  ${({ theme: { spacing } }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${spacing.headerSpacing};
  `}
`;
