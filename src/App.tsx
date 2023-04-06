import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokemonId from './pages/Pokedex/PokemonId';
import Pokemon from './pages/Pokemon';
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
              <Route path="pokedex" element={<Pokedex />}>
                <Route path=":id" element={<PokemonId />} />
              </Route>
              <Route path="pokemon/:id" element={<Pokemon />} />
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
