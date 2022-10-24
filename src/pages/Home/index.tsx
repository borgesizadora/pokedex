import { useEffect, useState } from "react";
import { AllPokemon, Pokemon } from "~/models/Pokemon";
import PokeList from "~/components/PokeList";
import {
  getAllPokemon,
  getPokemonByUrl,
} from "~/services/Pokemon/pokemonRequests";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [allPokemonComplete, setAllPokemonComplete] = useState<Pokemon[]>();

  const fillPokemonListData = async (list: AllPokemon) => {
    const arr = [] as Pokemon[];
    for await (let pokemon of list.results) {
      const resPokemon = await getPokemonByUrl(pokemon.url);
      arr.push(resPokemon);
    }

    setAllPokemonComplete(arr);
  };
  const fetchAllPokemon = async () => {
    setIsLoading(true);
    const res = await getAllPokemon();
    await fillPokemonListData(res);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {!!allPokemonComplete?.length && (
            <PokeList pokemonList={allPokemonComplete} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
