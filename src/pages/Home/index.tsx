import { useEffect, useState } from 'react';

import Loader from '~/components/Loader';
import PokeList from '~/components/PokeList';
import { AllPokemon, Pokemon } from '~/models/Pokemon';
import { getAllPokemon, getPokemonByUrl } from '~/services/Pokemon/pokemonRequests';

const LIMIT = 20;

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemonComplete, setAllPokemonComplete] = useState<Pokemon[]>([]);

  let offset = 0;

  const fillPokemonListData = async (list: AllPokemon) => {
    const arr = [] as Pokemon[];
    for await (let pokemon of list.results) {
      const resPokemon = await getPokemonByUrl(pokemon.url);
      arr.push(resPokemon);
    }

    setAllPokemonComplete((prevState) => [...prevState, ...arr]);
  };
  const fetchPokemonList = async () => {
    setIsLoading(true);
    const res = await getAllPokemon(offset, LIMIT);
    await fillPokemonListData(res);
    setIsLoading(false);
    offset += LIMIT;
  };

  const handleScroll = (e: Event) => {
    const target = e.target as Document;
    const scrollTop = target.documentElement.scrollTop;
    const scrollHeight = target.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if (scrollTop + windowHeight + 1 >= scrollHeight) {
      fetchPokemonList();
    }
  };

  useEffect(() => {
    fetchPokemonList();
    window.addEventListener('scroll', (e) => handleScroll(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!!allPokemonComplete?.length && <PokeList pokemonList={allPokemonComplete} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default Home;
