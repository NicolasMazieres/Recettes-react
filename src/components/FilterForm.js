import React from "react";

function FilterForm(props) {

    return (
        <form className="filterForm">
            <label>
                Rechercher recette : 
                <input
                    autoComplete="off"
                    value={props.formname}
                    onChange={(e) => props.handleChange(e)}
                />
            </label>
        </form>
    );
}

export default FilterForm;