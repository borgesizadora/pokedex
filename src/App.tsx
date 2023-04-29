import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

import AnimatedRoutes from './components/AnimatedRoutes';
import GlobalStyle from './shared/styles/global';
import theme from './shared/styles/theme';
const baseName = import.meta.env.VITE_BASE_NAME;

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={baseName}>
          <Routes>
            <Route path="/*" element={<AnimatedRoutes />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
