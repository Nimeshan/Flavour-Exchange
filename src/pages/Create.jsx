import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../store/slices/recipeSlice';

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    cookingTime: '',
    ingredients: '',
    instructions: '',
    image: ''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      cookingTime: parseInt(formData.cookingTime),
      ingredients: formData.ingredients.split(',').map(i => i.trim()),
      rating: 0
    };
    dispatch(createRecipe(newRecipe));
    navigate('/');
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </label>

        <label>
          <span>Recipe Image URL:</span>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            value={formData.cookingTime}
            onChange={(e) => setFormData({...formData, cookingTime: e.target.value})}
            required
          />
        </label>

        <label>
          <span>Ingredients (comma separated):</span>
          <textarea
            value={formData.ingredients}
            onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
            required
          />
        </label>

        <label>
          <span>Instructions:</span>
          <textarea
            value={formData.instructions}
            onChange={(e) => setFormData({...formData, instructions: e.target.value})}
            required
          />
        </label>

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}