import * as S from './styles';
interface IProgressBar {
  name: string;
  maxValue: number;
  currentValue: number;
  isBattle?: boolean;
}

export const ProgressBar = ({ name, maxValue, currentValue, isBattle = false }: IProgressBar) => {
  return (
    <S.SkillContainer>
      <S.Text>{name.toUpperCase()}</S.Text>
      <S.SkillBar isBattle={isBattle}>
        <S.SkillValue isBattle={isBattle} value={currentValue} maxValue={maxValue}>
          {!isBattle ? currentValue : ''}
        </S.SkillValue>
      </S.SkillBar>
      <S.BattleStats>{isBattle && `${currentValue}/${maxValue}`}</S.BattleStats>
    </S.SkillContainer>
  );
};
