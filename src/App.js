import React, { useState, useRef, useEffect } from "react";
import Recipe from "./components/Recipe";
import recipeData from "./components/recipesdata.json"

function App() {

  const jsonData = JSON.parse(JSON.stringify(recipeData));
  const allRecipes = jsonData.map((data,index) => {
    return <Recipe
      name={data.name}
      ingredients={data.ingredients}
      recipe={data.recette}
      key = {index}
    />;
  })

  return (
    <div className="appContainer">
      <h1>Entrées</h1>
      {allRecipes}
    </div >
  );
}

export default App;
