import React, { useState } from "react";

export default function Recipe(props) {
    const [isTextVisible, setTextVisible] = useState("false");

    const ingredientsList = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    })

    const recipeClicked = () => {
        setTextVisible(!isTextVisible);
    }

    const recipeText = (
        <div className="recipeContainer">
            <div className="ingredients">
                <h3>Ingrédients</h3>
                <ul>
                    {ingredientsList}
                </ul>
            </div>
            <div className="texteRecette">
                <h3>Recette {props.details}</h3>
                <p>{props.recipe}</p>
            </div>
            <div className="imgRecette">
            </div>
        </div>);

    return (
        <div>
            <h2 className="recipeName" onClick={() => recipeClicked()}>{props.name}</h2>
            {!isTextVisible && recipeText};
        </div>
    );
}