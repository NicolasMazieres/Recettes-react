import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuClicked, setMenu] = useState("false");
    const [largeur, setLargeur] = useState(window.innerWidth);

    const menuClicked = () => {
        setMenu(!isMenuClicked);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        if (window.innerWidth > 520) {
            setMenu(false);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    })


    return (
        <nav>
            {(isMenuClicked || largeur > 520) && (
                <ul className="nav-list">
                    <li className="nav-items">Accueil</li>
                    <li className="nav-items">Entrées</li>
                    <li className="nav-items">Plats</li>
                    <li className="nav-items">Desserts</li>
                </ul>)
            }
            <button className="nav-button" onClick={menuClicked}>Menu</button>
        </nav>
    );
}