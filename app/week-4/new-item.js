"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-emerald-300 p-6 rounded-lg shadow text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Select Quantity</h2>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg font-semibold shadow transition
            ${quantity === 1 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
              : "bg-red-400 text-white hover:bg-red-500 hover:scale-[1.05]"}`}
        >
          -
        </button>

        <span className="text-2xl font-bold text-gray-800">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg font-semibold shadow transition
            ${quantity === 20 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
              : "bg-green-400 text-white hover:bg-green-500 hover:scale-[1.05]"}`}
        >
          +
        </button>
      </div>
      <p className="mt-4 text-gray-700 text-sm">
        Quantity must stay between <strong>1</strong> and <strong>20</strong>.
      </p>
    </div>
  );
}
