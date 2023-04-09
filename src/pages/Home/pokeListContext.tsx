import { createContext, useContext } from 'react';

import { Pokemon } from '~/models/Pokemon';

interface IPokeListProvider {
  children: React.ReactNode;
}

interface PokeListContextType {
  pokemonList: Pokemon[];
}

const PokeListContext = createContext({} as PokeListContextType);

export const PokeListProvider = ({ children }: IPokeListProvider) => {
  const sharedArray = [] as Pokemon[];

  return (
    <PokeListContext.Provider value={{ pokemonList: sharedArray }}>
      {children}
    </PokeListContext.Provider>
  );
};

export const usePokeList = () => useContext(PokeListContext);
