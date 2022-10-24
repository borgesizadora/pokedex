import * as S from "./styles";

const CrossButton = () => {
  return (
    <S.Wrapper>
      <S.ButtonContainer>
        <S.Button />
        <S.ButtonShaddow />
      </S.ButtonContainer>
      <S.HorizontalBtnsContainer>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.Button />
          <S.ButtonShaddow />
        </S.ButtonContainer>
      </S.HorizontalBtnsContainer>
      <S.ButtonContainer>
        <S.Button />
        <S.ButtonShaddow />
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default CrossButton;
