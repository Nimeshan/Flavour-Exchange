import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetails } from '../store/slices/recipeSlice';
import { FaClock, FaStar } from 'react-icons/fa';

export default function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentRecipe, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  if (status === 'loading') return <div className="page loading">Loading recipe details...</div>;
  if (status === 'failed') return <div className="page error">Error loading recipe</div>;

  return (
    <div className="page recipe-details">
      {currentRecipe && (
        <>
          <div className="recipe-header">
            <h1>{currentRecipe.title}</h1>
            <div className="image-container">
              <img 
                src={currentRecipe.image} 
                alt={currentRecipe.title} 
                className="recipe-image"
              />
            </div>
          </div>
          
          <div className="recipe-meta">
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{currentRecipe.cookingTime} minutes</span>
            </div>
            <div className="meta-item">
              <FaStar className="meta-icon" />
              <span>{currentRecipe.rating.toFixed(1)}/5</span>
            </div>
          </div>

          <div className="detail-section">
  <h2 className="section-title">Ingredients</h2>
  <ul className="ingredients-list">
    {currentRecipe.ingredients.map((item, i) => (
      <li key={i} className="ingredient-item">
        <input 
          type="checkbox" 
          id={`ingredient-${i}`}
          className="ingredient-checkbox"
        />
        <label htmlFor={`ingredient-${i}`}>
          <span className="custom-checkbox"></span>
          {item}
        </label>
      </li>
    ))}
  </ul>
</div>

          <div className="detail-section">
            <h2 className="section-title">Instructions</h2>
            <div className="instructions">
              {currentRecipe.instructions.split('\n').map((step, i) => (
                step.trim() && (
                  <div key={i} className="instruction-step">
                    <div className="step-number">{i + 1}</div>
                    <p>{step}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}