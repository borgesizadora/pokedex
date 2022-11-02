import { AllPokemon, Pokemon, PokemonEvolutionData } from '~/models/Pokemon';

import api from '../api';

export const getAllPokemon = async (offset = 0, limit = 20) => {
  const response = await api.get(`/v2/pokemon/?offset=${offset}&limit=${limit}}`);
  return response.data as AllPokemon;
};

export const getPokemonById = async (id: number) => {
  const response = await api.get(`/v2/pokemon/${id}`);
  return response.data as Pokemon;
};

export const getPokemonByUrl = async (url: string) => {
  const response = await api.get(url);
  return response.data as Pokemon;
};

export const getPokemonEvolutions = async (id: number) => {
  const response = await api.get(`/v2/evolution-chain/${id}`);
  return response.data as PokemonEvolutionData;
};
