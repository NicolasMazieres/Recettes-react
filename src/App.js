import React, { useState } from "react";
import Recipe from "./components/Recipe";
import FilterForm from "./components/FilterForm";
import Navbar from "./components/Navbar";
import entreeData from "./components/entreedata.json";
import platData from "./components/platdata.json";
import dessertData from "./components/dessertdata.json";

function App() {
  const [contentShown, setContentShown] = useState('Accueil');
  const [filterName, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  const accueilClicked = () => {
    setContentShown("Accueil");
  }

  const entreesClicked = () => {
    setContentShown("Entrées");
    setName("");
  }

  const platsClicked = () => {
    setContentShown("Plats");
    setName("");
  }

  const dessertsClicked = () => {
    setContentShown("Desserts");
    setName("");
  }

  const entreejsonData = JSON.parse(JSON.stringify(entreeData));
  const platjsonData = JSON.parse(JSON.stringify(platData));
  const dessertjsonData = JSON.parse(JSON.stringify(dessertData));

  const entreeRecipes = entreejsonData
    .filter((data) => data.name.toLowerCase().includes(filterName.toLowerCase()))
    .sort((a,b) => {return a.name.localeCompare(b.name)})
    .map((data, index) => {
      return <Recipe
        name={data.name}
        details={data.details}
        ingredients={data.ingredients}
        recipe={data.recette}
        key={index}
        image={data.image}
      />;
    })

  const platRecipes = platjsonData
    .filter((data) => data.name.toLowerCase().includes(filterName.toLowerCase()))
    .sort((a,b) => {return a.name.localeCompare(b.name)})
    .map((data, index) => {
      return <Recipe
        name={data.name}
        details={data.details}
        ingredients={data.ingredients}
        recipe={data.recette}
        key={index}
        image={data.image}
      />;
    })

  const dessertRecipes = dessertjsonData
    .filter((data) => data.name.toLowerCase().includes(filterName.toLowerCase()))
    .sort((a,b) => {return a.name.localeCompare(b.name)})
    .map((data, index) => {
      return <Recipe
        name={data.name}
        details={data.details}
        ingredients={data.ingredients}
        recipe={data.recette}
        key={index}
        image={data.image}
      />;
    })

  const viewAccueil = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Accueil</h1>
      </div>
    </div>
  )

  const viewEntrees = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Entrées</h1>
        <FilterForm formname={filterName} handleChange={handleChange} />
      </div>
      <div className="recipesDesign">
        {entreeRecipes}
      </div>
    </div>
  )

  const viewPlats = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Plats</h1>
        <FilterForm formname={filterName} handleChange={handleChange} />
      </div>
      <div className="recipesDesign">
      {platRecipes}
      </div>
    </div>
  )

  const viewDesserts = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Desserts</h1>
        <FilterForm formname={filterName} handleChange={handleChange} />
      </div>
      <div className="recipesDesign">
      {dessertRecipes}
      </div>
    </div >
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
