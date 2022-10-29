import { Link } from 'react-router-dom';

import { Pokemon } from '~/models/Pokemon';
import { useTheme } from 'styled-components';

import TypeCard from '../TypeCard';
import * as S from './styles';

interface ICard {
  pokemon: Pokemon;
}
const Card: React.FC<ICard> = ({ pokemon }) => {
  const { typesColors } = useTheme();
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <S.Wrapper>
        <S.Header secondary={typesColors[pokemon.types[0].type.name]?.secondaryColor}>
          <S.Number>#{pokemon.id}</S.Number>
          <h3>{pokemon.name}</h3>
        </S.Header>

        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        <S.TypeCardWrapper>
          <TypeCard typeName={pokemon.types[0].type.name} />
        </S.TypeCardWrapper>
      </S.Wrapper>
    </Link>
  );
};

export default Card;
