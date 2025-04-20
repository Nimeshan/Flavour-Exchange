import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RecipeCard({ recipe }) {
  return (
    <motion.div 
      className="recipe-card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/recipes/${recipe.id}`}>
        <div className="img-container">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="info">
          <h3>{recipe.title}</h3>
          <p>⏱ {recipe.cookingTime} mins</p>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.round(recipe.rating) ? 'filled' : ''}>★</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}