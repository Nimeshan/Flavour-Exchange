import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../store/slices/recipeSlice';
import { FaPlusCircle, FaClock, FaListUl, FaBookOpen, FaImage } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    cookingTime: '',
    ingredients: '',
    instructions: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const newRecipe = {
        ...formData,
        cookingTime: parseInt(formData.cookingTime),
        ingredients: formData.ingredients.split(',').map(i => i.trim()),
        rating: 0
      };
      
      await dispatch(createRecipe(newRecipe)).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to create recipe:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-page">
      <motion.div 
        className="create-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="create-header">
          <FaPlusCircle className="header-icon" />
          <h2>Create New Recipe</h2>
          <p>Share your culinary masterpiece with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="recipe-form">
          <div className="form-section">
            <div className="form-group">
              <label>
                <span>Recipe Title</span>
                <div className="input-with-icon">
                  <input
                    type="text"
                    placeholder="e.g. Grandma's Apple Pie"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <span>Image URL</span>
                <div className="input-with-icon">
                  <input
                    type="text"
                    placeholder="Paste image URL here"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                  />
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <span>Cooking Time (minutes)</span>
                <div className="input-with-icon">
                  <input
                    type="number"
                    placeholder="e.g. 30"
                    min="1"
                    value={formData.cookingTime}
                    onChange={(e) => setFormData({...formData, cookingTime: e.target.value})}
                    required
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>
                <span>Ingredients</span>
                <div className="input-with-icon">
                  <textarea
                    placeholder="Enter ingredients separated by commas (e.g. flour, sugar, eggs)"
                    value={formData.ingredients}
                    onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                    required
                    rows="4"
                  />
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <span>Instructions</span>
                <textarea
                  placeholder="Provide step-by-step instructions..."
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  required
                  rows="6"
                />
              </label>
            </div>
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Recipe...' : 'Publish Recipe'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}