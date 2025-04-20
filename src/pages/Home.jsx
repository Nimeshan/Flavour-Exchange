import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/slices/recipeSlice';
import RecipeList from '../components/RecipeList';

export default function Home() {
  const dispatch = useDispatch();
  const { items: recipes, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="page home">
      <h2>All Recipes</h2>
      {status === 'loading' && <p>Loading recipes...</p>}
      {status === 'failed' && <p>Error loading recipes</p>}
      {status === 'succeeded' && <RecipeList recipes={recipes} />}
    </div>
  );
}