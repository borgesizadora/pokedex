import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/theme";
import GlobalStyle from "./shared/styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon/:id" element={<Pokemon />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
