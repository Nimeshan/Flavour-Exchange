import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../store/slices/recipeSlice';
import RecipeList from '../components/RecipeList';
import { FaPlusCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const dispatch = useDispatch();
  const { items: recipes, status } = useSelector((state) => state.recipes);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="page home">
      <div className="page-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Recipes
        </motion.h2>
        
        {token && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/create" className="create-btn">
              <FaPlusCircle className="icon" />
              Add Recipe
            </Link>
          </motion.div>
        )}
      </div>

      {status === 'loading' && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading delicious recipes...</p>
        </div>
      )}

      {status === 'failed' && (
        <div className="error-state">
          <p>⚠️ Failed to load recipes. Please try again later.</p>
          <button 
            onClick={() => dispatch(fetchRecipes())}
            className="retry-btn"
          >
            Retry
          </button>
        </div>
      )}

      {status === 'succeeded' && (
        <>
          {recipes.length === 0 ? (
            <div className="empty-state">
              <p>No recipes found. Be the first to share one!</p>
              {token && (
                <Link to="/create" className="create-btn">
                  Create Your First Recipe
                </Link>
              )}
            </div>
          ) : (
            <RecipeList recipes={recipes} />
          )}
        </>
      )}
    </div>
  );
}