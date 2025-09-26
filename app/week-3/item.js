// item.js
import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="grid grid-cols-3 gap-4 p-3 bg-emerald-300 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition transform mb-2">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-gray-600 text-center">Qty: {quantity}</span>
      <span className="text-sm text-teal-700 text-right">
        {category}
      </span>
    </li>
  );
}
