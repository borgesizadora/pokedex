import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import PokedexId from './pages/Pokedex/PokedexId';
import PokemonId from './pages/Pokemon/PokemonId';
import GlobalStyle from './shared/styles/global';
import theme from './shared/styles/theme';
const baseName = import.meta.env.VITE_BASE_NAME;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={baseName}>
        <PageLayout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="pokedex/:id" element={<PokedexId />} />
              <Route path="pokemon/:id" element={<PokemonId />} />
              <Route path="*" element={<div>Not found</div>} />
            </Route>
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
