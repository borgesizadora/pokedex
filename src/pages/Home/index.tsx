import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import Loader from '~/components/Loader';
import { Pokemon, Result } from '~/models/Pokemon';
import PokeList from '~/pages/Home/components/PokeList';
import { getAllPokemon, getPokemonByIdOrName } from '~/services/Pokemon/pokemonRequests';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';

import { usePokeList } from './pokeListContext';
import * as S from './styles';

import { PokemonType } from '~/models/PokemonType';

const LIMIT = 20;

function Home() {
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState<PokemonType | null>(null);
  const [allPokemonList, setAllPokemonList] = useState<Result[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Result[]>([]);

  const { isFetching, isFetchedAfterMount } = useQuery(
    ['pokemonList', offset],
    () => {
      return getAllPokemon(offset, LIMIT);
    },
    {
      onSuccess: (pokemonListData) => {
        setAllPokemonList((prev) => [...prev, ...pokemonListData.results]);
      }
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting && isFetchedAfterMount) {
        setOffset((prev) => prev + LIMIT);
      }
    },
    [isFetchedAfterMount]
  );

  const row = useRef(null);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1
    };
    const rowCurrent = row.current;

    const observer = new IntersectionObserver(handleObserver, option);
    if (rowCurrent) observer.observe(rowCurrent);

    return () => {
      if (rowCurrent) observer.unobserve(rowCurrent);
    };
  }, [handleObserver]);

  useEffect(() => {
    return () => {
      setAllPokemonList([]);
      setOffset(0);
    };
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const { pokemonList } = usePokeList();

  const handleFilter = () => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.types[0].type.name === 'fire');
    const filteredResultList = filteredList.map((pokemon) => ({ name: pokemon.name, url: '' }));
    setFilteredPokemonList(filteredResultList);
  };

  return (
    <S.Container>
      <S.IntroCard>
        <p>
          Here&#39;s a list of Pokemon from every generation. Click on any of them to get
          information about their type, stats, and evolution chain!
        </p>
      </S.IntroCard>
      <S.Wrapper>
        <button onClick={handleFilter}>filter</button>

        <DropdownMenuDemo />
        {filteredPokemonList.length ? (
          <PokeList pokemonList={filteredPokemonList} />
        ) : (
          !!allPokemonList?.length && <PokeList pokemonList={allPokemonList} />
        )}
        <div ref={row} />
        {isFetching && <Loader />}
      </S.Wrapper>
    </S.Container>
  );
}

export default Home;

const DropdownMenuDemo = () => {
  const pokemonTypes = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow'
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          Filter
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Label className="DropdownMenuLabel">Filter by:</DropdownMenu.Label>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {pokemonTypes.map((type) => (
            <DropdownMenu.Item key={type} className="DropdownMenuItem">
              {type}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
