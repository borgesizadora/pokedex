import { useCallback, useEffect, useRef, useState } from 'react';

import Loader from '~/components/Loader';
import PokeList from '~/components/PokeList';
import useFetchPokemons from '~/shared/styles/hooks/useFetchPokemons';

const LIMIT = 20;

function Home() {
  const [offset, setOffset] = useState(0);

  const { allPokemonComplete, loading } = useFetchPokemons(offset);

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

  return (
    <div>
      {!!allPokemonComplete?.length && <PokeList pokemonList={allPokemonComplete} />}
      <div ref={row} />
      {loading && <Loader />}
    </div>
  );
}

export default Home;
