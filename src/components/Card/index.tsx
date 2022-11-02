import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Pokemon } from '~/models/Pokemon';
import { getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import Loader from '../Loader';
import TypeCard from '../TypeCard';
import * as S from './styles';

interface ICard {
  pokemon: string;
}

const Card: React.FC<ICard> = ({ pokemon: pokemonProp }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await getPokemonByIdOrName(pokemonProp as string);
      setPokemon(res);
    };
    fetchPokemon();
  }, [pokemonProp]);
  const { typesColors } = useTheme();
  return (
    <S.Container>
      {pokemon ? (
        <Link to={`/pokedex/${pokemon.id}`}>
          <S.Wrapper>
            <S.Header secondary={typesColors[pokemon.types[0].type.name]?.secondaryColor}>
              <S.Number>#{pokemon.id}</S.Number>
              <h3>{pokemon.name}</h3>
            </S.Header>

            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <S.TypeCardWrapper>
              {pokemon.types.map((type) => (
                <TypeCard key={type.type.name} typeName={type.type.name} />
              ))}
            </S.TypeCardWrapper>
          </S.Wrapper>
        </Link>
      ) : (
        <Loader />
      )}
    </S.Container>
  );
};

export default Card;
