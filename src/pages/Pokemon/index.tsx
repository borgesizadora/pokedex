import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "~/services/Pokemon/pokemonRequests";
import { Pokemon as PokeType } from "~/models/Pokemon";
import * as S from "./styles";
import PokedexLayout from "~/components/PokedexLayout";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokeType>();

  const params = useParams();
  const fetchPokemon = async () => {
    setIsLoading(true);
    const res = await getPokemonById(Number(params.id));
    setPokemon(res);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>loading...</>
      ) : pokemon ? (
        <PokedexLayout pokemon={pokemon} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default Pokemon;
