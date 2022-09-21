import React from "react";

export default function Recipe(props) {
    
    const ingredientsList = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    })
    
    return (
        <div>
            <h2>{props.name}</h2>
            <div className="recipeContainer">
                <div className="ingredients">
                    <h3>Ingrédients</h3>
                    <ul>
                        {ingredientsList}
                    </ul>
                </div>
                <div className="texteRecette">
                    <h3>Recette</h3>
                    <p>{props.recipe}</p>
                </div>
                <div className="imgRecette">
                </div>
            </div>
        </div>
    );
}