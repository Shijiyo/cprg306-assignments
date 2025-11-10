"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="flex justify-between items-center p-3 mb-2 bg-emerald-300 rounded shadow cursor-pointer hover:bg-emerald-400 transition"
    >
      <span className="font-semibold text-gray-900">
        {name} <span className="text-sm text-gray-700">(Qty: {quantity})</span>
      </span>
      <span className="italic text-gray-700">{category}</span>
    </li>
  );
}
