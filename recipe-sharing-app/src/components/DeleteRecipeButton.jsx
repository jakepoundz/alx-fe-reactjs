import React from 'react';
import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <button onClick={() => {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to root path (or another route)
    }}>Delete Recipe</button>
  );
};
export default DeleteRecipeButton;