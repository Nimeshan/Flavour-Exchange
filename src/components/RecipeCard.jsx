import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="recipe-image-container">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-image" 
          />
          <span className="recipe-badge">Popular</span>
        </div>
        <div className="recipe-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          <div className="recipe-meta">
            <div className="recipe-time">
              <FaClock className="time-icon" />
              <span>{recipe.cookingTime} mins</span>
            </div>
            <div className="recipe-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < Math.round(recipe.rating) ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}