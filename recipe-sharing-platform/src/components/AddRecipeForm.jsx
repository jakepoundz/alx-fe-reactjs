import React, { useState } from 'react';
const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    const newErrors = validateForm(recipeData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (e.g., send data to an API)
      console.log('Recipe submitted:', recipeData);
      // Reset the form after successful submission
      setRecipeData({ title: '', ingredients: '', instructions: '' });
      setErrors({});
    }
  };
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!data.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!data.instructions.trim()) {
      newErrors.steps = 'Steps are required';
    }
    return newErrors;
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <textarea
            type="text"
            id="instructions"
            name="steps"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipeData.steps}
            onChange={handleChange}
          />
          {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="steps"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            value={recipeData.ingredients}
            onChange={handleChange}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">
            Instructions:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            value={recipeData.instructions}
            onChange={handleChange}
          />
          {errors.instructions && (
            <p className="text-red-500 text-xs italic">{errors.instructions}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <input className="shadow appearance-none border rounded w-full sm:w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddRecipeForm;