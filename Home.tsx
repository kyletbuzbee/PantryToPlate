import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRecipes } from '../services/firestoreService';
import './Home.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to PantryToPlate</h1>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
