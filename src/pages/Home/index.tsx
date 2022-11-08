import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import Loader from '~/components/Loader';
import { Result } from '~/models/Pokemon';
import PokeList from '~/pages/Home/components/PokeList';
import { getAllPokemon } from '~/services/Pokemon/pokemonRequests';

const LIMIT = 20;

function Home() {
  const [offset, setOffset] = useState(0);
  const [allPokemonList, setAllPokemonList] = useState<Result[]>([]);

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

  return (
    <div>
      {!!allPokemonList?.length && <PokeList pokemonList={allPokemonList} />}
      <div ref={row} />
      {isFetching && <Loader />}
    </div>
  );
}

export default Home;
