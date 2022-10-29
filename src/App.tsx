import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokemonId from './pages/Pokemon/PokemonId';
import GlobalStyle from './shared/styles/global';
import theme from './shared/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="pokemon" element={<Pokemon />}>
                <Route path=":id" element={<PokemonId />} />
              </Route>
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
