import TypeCard from '~/components/TypeCard';
import { PokeType } from '~/models/Pokemon';
import { useTheme } from 'styled-components';

import CrossButton from '../CrossButton';
import * as S from './styles';

interface IBottomPart {
  types: PokeType[];
  handleClosePokedex: () => void;
}
const BottomPart: React.FC<IBottomPart> = ({ types, handleClosePokedex }) => {
  const { colors } = useTheme();
  return (
    <S.Wrapper>
      <S.TopBtnsWrapper>
        <S.RoundButton />
        <S.CenterBtnsWrapper>
          <S.CenterBtn color={colors.red} />
          <S.CenterBtn color={colors.mediumBlue} />
        </S.CenterBtnsWrapper>

        <CrossButton handleClosePokedex={handleClosePokedex} />
      </S.TopBtnsWrapper>
      <S.TypeWrapper>
        {types.map((type) => (
          <TypeCard key={type.type.name} typeName={type.type.name} />
        ))}
      </S.TypeWrapper>
    </S.Wrapper>
  );
};

export default BottomPart;
