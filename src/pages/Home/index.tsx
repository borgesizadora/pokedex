import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import Loader from '~/components/Loader';
import { Result } from '~/models/Pokemon';
import PokeList from '~/pages/Home/components/PokeList';
import { getAllPokemon } from '~/services/Pokemon/pokemonRequests';
import { pageNavigationVariants } from '~/shared/animations/pageNavigation';
import { motion } from 'framer-motion';

import * as S from './styles';

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

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <motion.main initial="initial" animate="animate" exit="exit" variants={pageNavigationVariants}>
      <S.Container>
        <S.IntroCard>
          <p>
            Here&#39;s a list of Pokemon from every generation. Click on any of them to get
            information about their type, stats, and evolution chain!
          </p>
        </S.IntroCard>
        <S.Wrapper>
          {!!allPokemonList?.length && <PokeList pokemonList={allPokemonList} />}
          <div ref={row} />
          {isFetching && <Loader />}
        </S.Wrapper>
      </S.Container>
    </motion.main>
  );
}

export default Home;
