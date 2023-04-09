import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Pokemon } from '~/models/Pokemon';
import { usePokeList } from '~/pages/Home/pokeListContext';
import { getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';
import { useTheme } from 'styled-components';

import Loader from '../Loader';
import TypeCard from '../TypeCard';
import * as S from './styles';

interface ICard {
  pokemon: string;
  light?: boolean;
  isHome?: boolean;
}

const Card: React.FC<ICard> = ({ pokemon: pokemonProp, light = false, isHome = false }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const { pokemonList } = usePokeList();

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await getPokemonByIdOrName(pokemonProp as string);
      setPokemon(res);
      if (isHome) {
        pokemonList.push(res);
      }
    };
    fetchPokemon();
  }, [pokemonProp]);

  const { typesColors, colors } = useTheme();
  return (
    <S.Container light={light}>
      {pokemon ? (
        <Link to={`/pokemon/${pokemon.id}`}>
          <S.Wrapper light={light}>
            <S.Header secondary={typesColors[pokemon.types[0].type.name]?.secondaryColor}>
              <S.Number>#{pokemon.id}</S.Number>
              <h3>{pokemon.species.name}</h3>
            </S.Header>

            <img
              src={
                pokemon.sprites.other.dream_world.front_default ||
                pokemon.sprites.other['official-artwork'].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />
            <S.TypeCardWrapper>
              {pokemon.types.map((type) => (
                <TypeCard key={type.type.name} typeName={type.type.name} />
              ))}
            </S.TypeCardWrapper>
          </S.Wrapper>
        </Link>
      ) : (
        <Loader color={light ? colors.black : ''} />
      )}
    </S.Container>
  );
};

export default Card;

export const CardSkeleton = () => {
  const { colors } = useTheme();

  return <S.CardSkeleton baseColor={colors.lightGray} />;
};
