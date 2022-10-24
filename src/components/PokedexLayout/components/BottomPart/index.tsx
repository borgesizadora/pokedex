import { useTheme } from "styled-components";
import TypeCard from "~/components/TypeCard";
import CrossButton from "../CrossButton";
import * as S from "./styles";
import { PokemonType } from "~/models/PokemonType";

interface IBottomPart {
  type: PokemonType;
}
const BottomPart: React.FC<IBottomPart> = ({ type }) => {
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      <S.TopBtnsWrapper>
        <S.RoundButton />
        <S.CenterBtnsWrapper>
          <S.CenterBtn color={colors.red} />
          <S.CenterBtn color={colors.mediumBlue} />
        </S.CenterBtnsWrapper>

        <CrossButton />
      </S.TopBtnsWrapper>
      <S.TypeWrapper>
        <TypeCard typeName={type} />
      </S.TypeWrapper>
    </S.Wrapper>
  );
};

export default BottomPart;
