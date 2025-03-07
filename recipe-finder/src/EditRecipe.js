import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipe = ({ recipes, setRecipes }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editedRecipe, setEditedRecipe] = useState({});

  useEffect(() => {
    // Find the recipe to edit based on the id from the URL params
    const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(id));

    // Initialize the form with the current recipe data
    if (recipeToEdit) {
      setEditedRecipe(recipeToEdit);
    }
  }, [id, recipes]);

  const handleSubmit = event => {
    event.preventDefault();
    // Find the index of the edited recipe in the state
    const index = recipes.findIndex(recipe => recipe.id === editedRecipe.id);
    if (index !== -1) {
      // Update the recipe in the state
      const updatedRecipes = [...recipes];
      updatedRecipes[index] = editedRecipe;
      setRecipes(updatedRecipes);
      navigate('/recipes'); // Change the path to go back to the home page
    }
  };
  

  const handleChange = event => {
    const { name, value } = event.target;
    setEditedRecipe(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedRecipe.name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Ingredients:
          <input type="text" name="Ingredients" value={editedRecipe.Ingredients} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" name="Description" value={editedRecipe.Description} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditRecipe;