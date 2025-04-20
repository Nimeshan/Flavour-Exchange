import RecipeCard from './RecipeCard';
import { motion } from 'framer-motion';

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list-container">
      {recipes.length === 0 ? (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>No recipes found</h3>
          <p>Be the first to add a recipe!</p>
        </motion.div>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}