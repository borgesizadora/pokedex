import { Result } from '../../../../models/Pokemon';
import Card from '../../../../components/Card';
import * as S from './styles';

interface IPokeList {
  pokemonList: Result[];
}

const PokeList: React.FC<IPokeList> = ({ pokemonList }) => {
  return (
    <S.Wrapper>
      {pokemonList.map((pokemon, index) => {
        return <Card key={`${pokemon.name}-${index}`} pokemon={pokemon.name} />;
      })}
    </S.Wrapper>
  );
};

export default PokeList;
