import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css``}
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

export const DataRow = styled.span`
  ${({ theme }) => css``}
`;
