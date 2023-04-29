import { Route, Routes, useLocation } from 'react-router';

import { Battle } from '~/pages/Battle';
import Home from '~/pages/Home';
import PokedexId from '~/pages/Pokedex/PokedexId';
import PokemonId from '~/pages/Pokemon/PokemonId';
import { AnimatePresence } from 'framer-motion';

import PageLayout from '../PageLayout';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="pokedex/:id" element={<PokedexId />} />
          <Route path="pokemon/:id" element={<PokemonId />} />
          <Route path="battle" element={<Battle />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </AnimatePresence>
    </PageLayout>
  );
};

export default AnimatedRoutes;
