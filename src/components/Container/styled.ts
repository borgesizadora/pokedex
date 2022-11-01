import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
