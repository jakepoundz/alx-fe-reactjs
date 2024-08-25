import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import RecipeItem from './RecipeItem'; // Assuming you have a RecipeItem component
const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  useEffect(() => {
    generateRecommendations(); // Generate recommendations when needed
  }, [generateRecommendations]);
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;