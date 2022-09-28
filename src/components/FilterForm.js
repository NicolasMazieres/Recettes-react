import React from "react";

function FilterForm(props) {

    return (
        <form>
            <label>
                Rechercher recette : 
                <input
                    autoComplete="off"
                    value={props.formname}
                    onChange={props.setname}
                />
            </label>
        </form>
    );
}

export default FilterForm;