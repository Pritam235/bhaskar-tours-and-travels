import React from 'react';
import './DestinationCard.css';

function DestinationCard({ name, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button>Book Now</button>
    </div>
  );
}

export default DestinationCard;
