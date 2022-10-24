import { PokemonType } from "./PokemonType";

export interface PokeType {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

export interface PokeStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
  stats: PokeStat[];
  types: PokeType[];
}

interface Result {
  name: string;
  url: string;
}
export interface AllPokemon {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
