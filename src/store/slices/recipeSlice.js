import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipes, getRecipeDetails, createRecipe as createRecipeAPI } from '../../api/recipes';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await getRecipes();
  return response.data;
});

export const fetchRecipeDetails = createAsyncThunk('recipes/fetchDetails', async (id) => {
  const response = await getRecipeDetails(id);
  return response.data;
});

export const createRecipe = createAsyncThunk('recipes/create', async (recipeData) => {
  const response = await createRecipeAPI(recipeData);
  return response.data;
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    currentRecipe: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.currentRecipe = action.payload;
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
});

export default recipeSlice.reducer;