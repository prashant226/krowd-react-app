import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
