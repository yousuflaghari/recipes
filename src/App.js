import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Recipedetail from "./components/recipedetail";
import RecipeList from "./components/recipielist";
import SearchPage from "./components/search.";
import ROUTES from "./utils/constants/constants";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Header from "./components/header";
import { lightTheme, darkTheme } from "./styles/theme";
import styled from "@emotion/styled";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const ThemeMain = styled.div`
    background-color: ${(props) => props.theme.colors.appbackgroundcolor};
    min-height: 100vh;
  `;

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <ThemeMain>
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
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
        </ThemeMain>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
