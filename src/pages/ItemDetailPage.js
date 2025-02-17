// src/pages/ItemDetailPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyItems from "../data/dummyData";
import "./ItemDetailPage.css";

function ItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = dummyItems.find((itm) => itm.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found!</div>;
  }

  const handleRequestRental = () => {
    alert(`Rental request submitted for ${item.name}!`);
    navigate("/browse");
  };

  return (
    <div className="item-detail-page">
      <img src={item.image} alt={item.name} className="item-detail__image" />
      <div className="item-detail__info">
        <h2>{item.name}</h2>
        <p>Category: {item.category}</p>
        <p>Actual Price: ${item.actualPrice}</p>
        <p>Rental Price / day: ${item.rentalPricePerDay}</p>
        <p>Description: {item.description}</p>
        <button onClick={handleRequestRental}>Request Rental</button>
      </div>
    </div>
  );
}

export default ItemDetailPage;
