import React, { useState } from "react";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import entreeData from "./components/entreedata.json";
import platData from "./components/platdata.json";
import dessertData from "./components/dessertdata.json";

function App() {
  const [contentShown, setContentShown] = useState('Accueil');

  const accueilClicked = () => {
    setContentShown("Accueil");
  }

  const entreesClicked = () => {
    setContentShown("Entrées");
  }

  const platsClicked = () => {
    setContentShown("Plats");
  }

  const dessertsClicked = () => {
    setContentShown("Desserts");
  }

  const entreejsonData = JSON.parse(JSON.stringify(entreeData));
  const platjsonData = JSON.parse(JSON.stringify(platData));
  const dessertjsonData = JSON.parse(JSON.stringify(dessertData));

  const entreeRecipes = entreejsonData.map((data, index) => {
    return <Recipe
      name={data.name}
      details={data.details}
      ingredients={data.ingredients}
      recipe={data.recette}
      key={index}
    />;
  })

  const platRecipes = platjsonData.map((data, index) => {
    return <Recipe
      name={data.name}
      details={data.details}
      ingredients={data.ingredients}
      recipe={data.recette}
      key={index}
    />;
  })

  const dessertRecipes = dessertjsonData.map((data, index) => {
    return <Recipe
      name={data.name}
      details={data.details}
      ingredients={data.ingredients}
      recipe={data.recette}
      key={index}
    />;
  })

  const viewAccueil = (
    <div className="accueilContainer">
      <h1>Accueil</h1>
    </div>
  )

  const viewEntrees = (
    <div className="entreeContainer">
      <h1>Entrées</h1>
      {entreeRecipes}
    </div>
  )

  const viewPlats = (
    <div className="platContainer">
      <h1>Plats</h1>
      {platRecipes}
    </div>
  )

  const viewDesserts = (
    <div className="dessertContainer">
      <h1>Desserts</h1>
      {dessertRecipes}
    </div>
  )


  return (
    <div className="appContainer">
      <Navbar setstate={{ accueilClicked, entreesClicked, platsClicked, dessertsClicked }} />
      {contentShown === "Accueil" && viewAccueil}
      {contentShown === "Entrées" && viewEntrees}
      {contentShown === "Plats" && viewPlats}
      {contentShown === "Desserts" && viewDesserts}
    </div>
  );
}

export default App;
