import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';

interface ICrossButton {
  handleClosePokedex: () => void;
}

const CrossButton = ({ handleClosePokedex }: ICrossButton) => {
  const { id } = useParams();

  const currentPage = Number(id);

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  const navigate = useNavigate();

  const redirectAfterDelay = (path: string) => {
    handleClosePokedex();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <S.Wrapper>
      <button onClick={() => redirectAfterDelay(`/pokedex/${prevPage}`)}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </button>
      <S.HorizontalBtnsContainer>
        <button onClick={() => redirectAfterDelay(`/pokedex/${prevPage}`)}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </button>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
        <button onClick={() => redirectAfterDelay(`/pokedex/${nextPage}`)}>
          <S.ButtonContainer>
            <S.Button />
            <S.ButtonShaddow />
          </S.ButtonContainer>
        </button>
      </S.HorizontalBtnsContainer>
      <button onClick={() => redirectAfterDelay(`/pokedex/${nextPage}`)}>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </button>
    </S.Wrapper>
  );
};

export default CrossButton;
