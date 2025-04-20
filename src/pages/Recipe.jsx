import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetails } from '../store/slices/recipeSlice';

export default function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentRecipe, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  if (status === 'loading') return <div className="page">Loading...</div>;
  if (status === 'failed') return <div className="page">Error loading recipe</div>;

  return (
    <div className="page recipe-details">
      {currentRecipe && (
        <>
          <div className="recipe-header">
            <h2>{currentRecipe.title}</h2>
            <img src={currentRecipe.image} alt={currentRecipe.title} />
          </div>
          
          <div className="meta">
            <p>⏱ {currentRecipe.cookingTime} minutes</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.round(currentRecipe.rating) ? 'filled' : ''}>★</span>
              ))}
            </div>
          </div>

          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {currentRecipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="instructions">
            <h3>Instructions</h3>
            <div className="steps">
              {currentRecipe.instructions.split('\n').map((step, i) => (
                <p key={i}>{step}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}