import { PokemonType } from './PokemonType';

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
      'official-artwork': { front_default: string };
    };
  };
  stats: PokeStat[];
  types: PokeType[];
  species: { name: string };
}

export interface Result {
  name: string;
  url: string;
}
export interface AllPokemon {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface PokemonEvolution {
  species: Result;
  evolves_to: PokemonEvolution[];
}

export interface PokemonEvolutionData {
  id: number;
  chain: PokemonEvolution;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: { name: string; url: string };
}
export interface PokemonSpecies {
  id: number;
  name: string;
  evolves_from_species: Result;
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: FlavorTextEntry[];
}
