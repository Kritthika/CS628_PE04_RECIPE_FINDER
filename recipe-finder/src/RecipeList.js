import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import recipeImage from './images/recipe.jpg'; // Importing background image

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Fetch the list of recipes from the backend
  useEffect(() => {
    fetch('https://improved-funicular-pwg695pjpg92r55w-5050.app.github.dev/record') // Replace with your backend URL if needed
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted recipe from the state
        const updatedRecipes = recipes.filter((recipe) => recipe._id !== id);
        setRecipes(updatedRecipes);
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${recipeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Recipe Finder Application</h1>
      <Link to="/recipes" style={{ color: 'black', textDecoration: 'none' }}>
        Recipes List
      </Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link
              to={`/recipes/${recipe._id}`}
              onClick={() => handleRecipeClick(recipe)}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {recipe.name}
            </Link>
            <button onClick={() => handleDelete(recipe._id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/recipes/add" style={{ color: 'black', textDecoration: 'none' }}>
        Add Recipe
      </Link>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
};

export default RecipeList;
