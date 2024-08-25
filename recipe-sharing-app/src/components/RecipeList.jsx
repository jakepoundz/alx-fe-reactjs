import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import RecipeItem from './RecipeItem'; // Assuming you have a RecipeItem component
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Use filteredRecipes
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  useEffect(() => {
    filterRecipes(); // Filter when searchTerm changes
  }, [filterRecipes]);
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
export default RecipeList;