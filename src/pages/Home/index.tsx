import { useCallback, useEffect, useRef, useState } from 'react';

import Loader from '~/components/Loader';
import PokeList from '~/components/PokeList';
import useFetchPokemons from '~/shared/hooks/useFetchPokemons';

import * as S from './styles';

const LIMIT = 20;

function Home() {
  const [offset, setOffset] = useState(0);

  const { allPokemonList, loading } = useFetchPokemons(offset);

  const row = useRef(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset((prev) => prev + LIMIT);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (row.current) observer.observe(row.current);
  }, [handleObserver]);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
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
        {loading && <Loader />}
      </S.Wrapper>
    </S.Container>
  );
}

export default Home;
