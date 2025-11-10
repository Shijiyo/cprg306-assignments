"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // create new item object with random id
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    // call parent handler from props
    onAddItem(newItem);

    // reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-emerald-300 p-6 rounded-lg shadow text-center space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">Add a New Item</h2>

      <div>
        <label className="block text-left font-semibold text-gray-800">
          Item Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          className="w-full mt-1 p-2 border rounded text-gray-800"
        />
      </div>

      <div>
        <label className="block text-left font-semibold text-gray-800">
          Quantity
        </label>
        <div className="flex items-center justify-center space-x-4 mt-1">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-4 py-2 rounded-lg font-semibold shadow transition
              ${
                quantity === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-400 text-white hover:bg-red-500 hover:scale-[1.05]"
              }`}
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-800">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded-lg font-semibold shadow transition
              ${
                quantity === 20
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-400 text-white hover:bg-green-500 hover:scale-[1.05]"
              }`}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block text-left font-semibold text-gray-800">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mt-1 p-2 border rounded text-gray-800"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
      >
        Add Item
      </button>
    </form>
  );
}
