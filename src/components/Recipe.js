import React, { useState } from "react";

export default function Recipe(props) {
    const [isTextHidden, setTextVisible] = useState("true");

    const ingredientsList = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    })

    const recipeOpen = () => {
        setTextVisible(false);
    }

    const recipeClosed = () => {
        setTextVisible(true);
    }

    const recipeText = (
        <div className="popup">
            <div className="recipeContainer">
                <h2 className="recipeNameOnPopup">{props.name}</h2>
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
                <div className="closeRecipeButton">
                    <button onClick={() => recipeClosed()}>X</button>
                </div>
            </div>
        </div>);

    return (
        <div className="imageContainer">
            <h2 className="recipeName" onClick={() => recipeOpen()}>{props.name}</h2>
            {isTextHidden && <img src={props.image} alt="Oups non disponible" onClick={() => recipeOpen()} />}
            {!isTextHidden && recipeText}
        </div>
    );
}