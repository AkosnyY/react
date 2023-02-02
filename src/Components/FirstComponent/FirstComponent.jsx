import React, { useState } from 'react'
import './FirstComponent.css';

export default function FirstComponent() {
    const [data, setData] = useState({
        firstName: "John",
        lastName: "Doe",
        age: 24
    });

    const [isLogged, setIsLogged] = useState(false)

    return (
        <div className='component__container'>
            <h1 className='component__title'>Bienvenue {data.firstName} {data.lastName}</h1>
            <p className='component__paragraph'>Vous êtes actuellement {isLogged ? "connecté" : "déconnecté"}.</p>
            <button className='component__button' onClick={() => setIsLogged(!isLogged)}>{isLogged ? "Déconnexion" : "Connexion"}</button>
        </div>
    )
}
