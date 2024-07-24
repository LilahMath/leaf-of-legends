// PlantCard.jsx
import React from 'react';
import './PlantCard.css'; // Optional, for custom styling

function PlantCard({ plant }) {
    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-details">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>
            </div>
        </div>
    );
}

export default PlantCard;
