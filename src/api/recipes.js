import axios from 'axios';

const API_URL = 'http://localhost:3001/recipes';

export const getRecipes = () => axios.get(API_URL);
export const getRecipeDetails = (id) => axios.get(`${API_URL}/${id}`);
export const createRecipe = (recipe) => axios.post(API_URL, recipe);
export const searchRecipes = (query) => axios.get(`${API_URL}?q=${query}`);