import React, { useState, useEffect } from 'react';
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Spotlight</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full rounded-md mb-2" />
            <h2 className="text-xl font-semibold mb-1">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <a href="#" className="text-blue-500 hover:underline">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;