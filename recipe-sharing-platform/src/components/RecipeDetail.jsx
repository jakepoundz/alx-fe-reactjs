import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`./data.json`) 
      .then(res => res.json())
      .then(data => {
        const foundRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);
  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <img src={recipe.image} alt={recipe.title} className="w-full rounded-md mb-2" />
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-4">
            {/* Add your ingredients here, e.g. */}
            <li>1 cup flour</li>
            <li>2 eggs</li>
            {/* ... more ingredients ... */}
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
          <ol className="list-decimal pl-4">
            {/* Add your cooking steps here, e.g. */}
            <li>Preheat oven to 350 degrees F (175 degrees C).</li>
            <li>Mix ingredients together...</li>
            {/* ... more instructions ... */}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetail;