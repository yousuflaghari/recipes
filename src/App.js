import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Recipedetail from "./components/recipedetail";
import RecipeList from "./components/recipielist";
import SearchPage from "./components/search.";
import ROUTES from "./utils/constants/constants";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Header from "./components/header";
import { theme } from "./styles/theme";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const lightTheme = {
    colors: {
      background: theme.colors.lightthemebackground,
      text: theme.colors.lightthemetext,
      highlight: theme.colors.lightthemehighlight,
    },
  };

  const darkTheme = {
    colors: {
      background: theme.colors.darkthemebackground,
      text: theme.colors.darkthemetext,
      highlight: theme.colors.darkthemehighlight,
    },
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
