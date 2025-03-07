import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddRecipe = ({ recipes, setRecipes }) => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    name: '',
    Ingredients: '',
    Description: '',
 });
  const handleSubmit = event => {
    event.preventDefault();
   
    const newRecipe = { ...recipeData, id: recipes.length + 1 };
    setRecipes ([...recipes, newRecipe]);
    navigate('/recipes');
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setRecipeData(prevData => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="name" value={recipeData.name} onChange={handleChange} />
        </label>
       <br />
       <br />
       <label>
          Ingredients:
          <input type="text" name="Ingredients" value={recipeData.Ingredients} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" name="Description" value={recipeData.Description} onChange={handleChange} />
        </label>
        <br />
        <br />
              <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};
export default AddRecipe;