import React from 'react';
import './PlantCard.css'; // Ensure you have this CSS file for styling

const PlantCard = ({ plant }) => {
    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>
            </div>
        </div>
    );
};

export default PlantCard;
