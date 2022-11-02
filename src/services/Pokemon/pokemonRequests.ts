import { AllPokemon, Pokemon, PokemonEvolutionData, PokemonSpecies } from '~/models/Pokemon';

import api from '../api';

export const getAllPokemon = async (offset = 0, limit = 20) => {
  const response = await api.get(`/v2/pokemon/?offset=${offset}&limit=${limit}}`);
  return response.data as AllPokemon;
};

export const getPokemonByIdOrName = async (idOrName: number | string) => {
  const response = await api.get(`/v2/pokemon/${idOrName}`);
  return response.data as Pokemon;
};

export const getPokemonByUrl = async (url: string) => {
  const response = await api.get(url);
  return response.data as Pokemon;
};

export const getPokemonEvolutionChainByUrl = async (url: string) => {
  const response = await api.get(url);
  return response.data as PokemonEvolutionData;
};

export const getPokemonSpecies = async (id: number) => {
  const response = await api.get(`/v2/pokemon-species/${id}`);
  return response.data as PokemonSpecies;
};
