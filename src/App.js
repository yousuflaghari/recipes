import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Recipedetail from "./components/recipedetail";
import RecipeList from "./components/recipielist";
import SearchPage from "./components/search.";
import ROUTES from "./utils/constants/constants";
import Header from "./components/header";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/recipes/:recipeId" element={<Recipedetail />} />
        <Route
          path={ROUTES.DINNER}
          element={<RecipeList mealType="Dinner" />}
        />
        <Route path={ROUTES.LUNCH} element={<RecipeList mealType="Lunch" />} />
        <Route
          path={ROUTES.DESSERTS}
          element={<RecipeList mealType="Dessert" />}
        />
        <Route path={ROUTES.SNAKS} element={<RecipeList mealType="Snack" />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
