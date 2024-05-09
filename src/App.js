import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Recipedetail from "./components/recipedetail";
import RecipeList from "./components/recipielist";
import SearchPage from "./components/search.";
import ROUTES from "./utils/constants/constants";
import Header from "./components/header";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "./styles/theme";
function App() {
  const ThemeCheck = styled.div`
    color: ${theme.colors.primaryappColor};
    background-color: ${theme.colors.backgroundappColor};
  `;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ThemeCheck>
          <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="/recipes/:recipeId" element={<Recipedetail />} />
            <Route
              path={ROUTES.DINNER}
              element={<RecipeList mealType="Dinner" />}
            />
            <Route
              path={ROUTES.LUNCH}
              element={<RecipeList mealType="Lunch" />}
            />
            <Route
              path={ROUTES.DESSERTS}
              element={<RecipeList mealType="Dessert" />}
            />
            <Route
              path={ROUTES.SNAKS}
              element={<RecipeList mealType="Snack" />}
            />
            <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          </Routes>
        </ThemeCheck>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
