import { Pokemon } from '../../models/Pokemon';
import Card from '../Card';
import * as S from './styles';

interface IPokeList {
  pokemonList: Pokemon[];
}

const PokeList: React.FC<IPokeList> = ({ pokemonList }) => {
  return (
    <S.Wrapper>
      {pokemonList.map((pokemon, index) => {
        return <Card key={`${pokemon.name}-${index}`} pokemon={pokemon} />;
      })}
    </S.Wrapper>
  );
};

export default PokeList;
