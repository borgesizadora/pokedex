import { Link, useParams } from 'react-router-dom';

import * as S from './styles';

const CrossButton = () => {
  const { id } = useParams();

  const currentPage = Number(id);

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  return (
    <S.Wrapper>
      <Link to={`/pokedex/${prevPage}`}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </Link>
      <S.HorizontalBtnsContainer>
        <Link to={`/pokedex/${prevPage}`}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </Link>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
        <Link to={`/pokedex/${nextPage}`}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </Link>
      </S.HorizontalBtnsContainer>
      <Link to={`/pokedex/${nextPage}`}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </Link>
    </S.Wrapper>
  );
};

export default CrossButton;
