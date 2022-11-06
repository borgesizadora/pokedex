import * as S from './styles';

const LayoutPokedexRight: React.FC<{ className?: string; children?: JSX.Element }> = ({
  className,
  children
}) => {
  return (
    <S.Wrapper className={className}>
      <S.Header />
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  );
};

export default LayoutPokedexRight;
