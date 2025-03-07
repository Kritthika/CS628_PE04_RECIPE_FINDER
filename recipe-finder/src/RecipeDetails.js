import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = ({ onDelete }) => {
  const { id } = useParams();  // Retrieve the ID from the URL params
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState({
    name: '',
    ingredients: '',
    description: ''
  });

  // Fetch recipe data from the backend using the ID
  useEffect(() => {
    fetch(`https://improved-funicular-pwg695pjpg92r55w-5050.app.github.dev/record/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setUpdatedRecipe({
          name: data.name,
          ingredients: data.ingredients,
          description: data.description
        });
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  const handleDelete = () => {
    fetch(`https://improved-funicular-pwg695pjpg92r55w-5050.app.github.dev/record/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        onDelete(id); // Inform the parent component to update the list
        navigate('/recipes'); // Redirect to the recipes list after deletion
      })
      .catch((error) => console.error('Error deleting recipe:', error));
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    fetch(`https://improved-funicular-pwg695pjpg92r55w-5050.app.github.dev/record/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        navigate(`/recipes/${id}`); // Navigate back to the updated recipe details
        setEditing(false); // Turn off editing mode
      })
      .catch((error) => console.error('Error updating recipe:', error));
  };

  if (!recipe) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      {editing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedRecipe.name}
            onChange={handleUpdateChange}
          />
          <textarea
            name="ingredients"
            value={updatedRecipe.ingredients}
            onChange={handleUpdateChange}
          />
          <textarea
            name="description"
            value={updatedRecipe.description}
            onChange={handleUpdateChange}
          />
          <button onClick={handleUpdate}>Update Recipe</button>
          <button onClick={handleEditToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {recipe.name}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Description:</strong> {recipe.description}</p>
          <button onClick={handleEditToggle}>Edit Recipe</button>
          <button onClick={handleDelete}>Delete Recipe</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
