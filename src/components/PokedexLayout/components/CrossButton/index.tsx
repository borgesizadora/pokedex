import { Link, useParams } from 'react-router-dom';

import * as S from './styles';

const CrossButton = () => {
  const { id } = useParams();

  const currentPage = Number(id);

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  return (
    <S.Wrapper>
      <Link to={`/pokemon/${prevPage}`}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </Link>
      <S.HorizontalBtnsContainer>
        <Link to={`/pokemon/${prevPage}`}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </Link>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
        <Link to={`/pokemon/${nextPage}`}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </Link>
      </S.HorizontalBtnsContainer>
      <Link to={`/pokemon/${nextPage}`}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </Link>
    </S.Wrapper>
  );
};

export default CrossButton;
