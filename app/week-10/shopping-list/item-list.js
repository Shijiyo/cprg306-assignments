"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-6 mt-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "name"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-400 text-gray-900 hover:bg-emerald-500"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "category"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-400 text-gray-900 hover:bg-emerald-500"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
