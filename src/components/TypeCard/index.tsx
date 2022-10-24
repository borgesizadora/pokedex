import { PokemonType } from "~/models/PokemonType";
import * as S from "./styles";

interface ITypeCard {
  typeName: PokemonType;
}

const TypeCard: React.FC<ITypeCard> = ({ typeName }) => {
  return <S.Wrapper typeName={typeName || ""}>{typeName}</S.Wrapper>;
};

export default TypeCard;
