import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Index';
import NewRecipe from './pages/NewRecipes/Index';
import Recipe from './pages/Recipe/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="new-recipe" element={<NewRecipe />} />
        <Route path="recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
