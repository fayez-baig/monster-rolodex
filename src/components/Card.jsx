import React from 'react';
import './card.css'

export const Card = props =>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monsters.id}?set=set`} alt="Monster Images"/>
        <h2>{props.monsters.name}</h2>
        <h3>{props.monsters.email}</h3>
    </div>
    )