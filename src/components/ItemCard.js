// src/components/ItemCard.js
import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onViewDetails }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-card__image" />
      <div className="item-card__info">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Actual Price: ${item.actualPrice}</p>
        <p>Rental Price / day: ${item.rentalPricePerDay}</p>
      </div>
      <button onClick={() => onViewDetails(item.id)}>View Details</button>
    </div>
  );
}

export default ItemCard;
