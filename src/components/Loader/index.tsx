import * as S from './styles';

const Loader: React.FC<{ color?: string }> = ({ color }) => {
  return <S.Loader color={color} />;
};

export default Loader;
