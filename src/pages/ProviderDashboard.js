// src/pages/ProviderDashboard.js
import React, { useState } from "react";
import dummyItems from "../data/dummyData";
import "./ProviderDashboard.css";

function ProviderDashboard() {
  // Simulate the provider’s items in local state
  const [providerItems, setProviderItems] = useState(dummyItems);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form inputs
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemImage, setNewItemImage] = useState(null);
  const [newItemDescription, setNewItemDescription] = useState("");

  const handleAddItem = () => {
    // Quick validation
    if (!newItemName || !newItemPrice || !newItemImage) {
      alert("Please fill all required fields!");
      return;
    }

    // Create a new item object
    const newItem = {
      id: providerItems.length + 1,
      name: newItemName,
      category: "Custom", // or whatever
      actualPrice: Number(newItemPrice),
      rentalPricePerDay: Math.round(Number(newItemPrice) * 0.1), // or user-defined
      image: URL.createObjectURL(newItemImage),
      description: newItemDescription,
    };

    setProviderItems([...providerItems, newItem]);
    // Reset form fields
    setNewItemName("");
    setNewItemPrice("");
    setNewItemDescription("");
    setNewItemImage(null);
    setShowAddForm(false);
  };

  return (
    <div className="provider-dashboard">
      <h2>Provider Dashboard</h2>
      <p>Welcome, see all your listed items below (dummy data + newly added).</p>
      <button className="add-item-btn" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add New Item"}
      </button>

      {showAddForm && (
        <div className="add-item-form">
          <h3>Add New Item</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Actual Price"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
          />
          <textarea
            rows="3"
            placeholder="Item Description"
            value={newItemDescription}
            onChange={(e) => setNewItemDescription(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewItemImage(e.target.files[0])}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}

      <div className="dashboard-items">
        {providerItems.map((item) => (
          <div className="dashboard-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>Daily Rent: ${item.rentalPricePerDay}</p>
              <p style={{fontSize: "0.9rem"}}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProviderDashboard;
