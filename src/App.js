import React, { useState } from "react";
import Recipe from "./components/Recipe";
import FilterForm from "./components/FilterForm";
import Navbar from "./components/Navbar";
import entreeData from "./components/entreedata.json";
import platData from "./components/platdata.json";
import dessertData from "./components/dessertdata.json";
import saucePreparationData from "./components/saucepaindata.json";
import cuissonData from "./components/cuissondata.json";

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

  const saucesPreparationsClicked = () => {
    setContentShown("Sauces / Préparations");
    setName("");
  }

  const cuissonsClicked = () => {
    setContentShown("Cuissons");
    setName("");
  }

  function convertJsonToRecipes(jsonDataRaw) {
    const jsonData = JSON.parse(JSON.stringify(jsonDataRaw));
    return jsonData
      .filter((data) => data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
      .sort((a, b) => { return a.name.localeCompare(b.name) })
      .map((data, index) => {
        return <Recipe
          name={data.name}
          details={data.details}
          ingredients={data.ingredients}
          recipe={data.recette}
          key={index}
          image={data.image}
        />;
      });
  }

  const entreeRecipes = convertJsonToRecipes(entreeData);
  const platRecipes = convertJsonToRecipes(platData);
  const dessertRecipes = convertJsonToRecipes(dessertData);
  const saucePreparationRecipes = convertJsonToRecipes(saucePreparationData);
  const cuissonRecipes = convertJsonToRecipes(cuissonData);

  const viewAccueil = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1 className="titleAccueil">Accueil</h1>
        <figure className="quote">
          <blockquote>
            <p>La gourmandise commence quand on n'a plus faim.</p>
          </blockquote>
          <figcaption>— Alphonse Daudet, <cite>Lettres de mon moulin, 1870</cite></figcaption>
        </figure>
        <figure className="quote">
          <blockquote>
            <p>Il n’y a pas de bonne cuisine si au départ
              elle n’est pas faite par amitié pour celui ou celle à qui elle est destinée.</p>
          </blockquote>
          <figcaption>— Paul Bocuse, <cite>Entretien avec Bernard Pivot, Janvier 1976</cite></figcaption>
        </figure>
        <figure className="quote">
          <blockquote>
            <p>La vie de l'homme est une chasse au bonheur. Parmi ces bonheurs, l'exercice de la gourmandise est l'un des plus importants. Un pays vaut surtout par les joies qu'il procure à ses habitants et à ceux qui le visitent. La gastronomie, c'est-à-dire l'art qui satisfait la gourmandise, représente un pays au même titre que les autres arts.
              La cuisine fait connaître le paysage. Le paysage sert à comprendre la cuisine</p>
          </blockquote>
          <figcaption>— Jean Giono, <cite>La Provence gourmande de Jean Giono, 1994</cite></figcaption>
        </figure>
        <figure className="quote">
          <blockquote>
            <p>La cuisine anglaise, c’est simple: quand c’est froid c’est de la bière,
              quand c’est chaud c’est de la soupe.</p>
          </blockquote>
          <figcaption>— Coluche</figcaption>
        </figure>
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

  const viewSaucesPreparations = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Sauces / Préparations</h1>
        <FilterForm formname={filterName} handleChange={handleChange} />
      </div>
      <div className="recipesDesign">
        {saucePreparationRecipes}
      </div>
    </div >
  )

  const viewCuissons = (
    <div className="bodyContainer">
      <div className="pageTitleContainer">
        <h1>Cuissons</h1>
        <FilterForm formname={filterName} handleChange={handleChange} />
      </div>
      <div className="recipesDesign">
        {cuissonRecipes}
      </div>
    </div >
  )


  return (
    <div className="appContainer">
      <Navbar setstate={{ accueilClicked, entreesClicked, platsClicked, dessertsClicked, saucesPreparationsClicked: saucesPreparationsClicked, cuissonsClicked }} />
      {contentShown === "Accueil" && viewAccueil}
      {contentShown === "Entrées" && viewEntrees}
      {contentShown === "Plats" && viewPlats}
      {contentShown === "Desserts" && viewDesserts}
      {contentShown === "Sauces / Préparations" && viewSaucesPreparations}
      {contentShown === "Cuissons" && viewCuissons}
    </div>
  );
}

export default App;
