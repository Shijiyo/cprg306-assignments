"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let content;

  if (sortBy === "group") {
    // Group items by category
    const grouped = itemsData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    // Sort categories and items alphabetically
    const sortedCategories = Object.keys(grouped).sort();
    sortedCategories.forEach((cat) =>
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name))
    );

    content = (
      <div>
        {sortedCategories.map((category) => (
          <div key={category} className="mb-4">
            <h2 className="font-bold capitalize mb-2 text-gray-800">{category}</h2>
            <ul className="ml-4">
              {grouped[category].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  } else {
    // Flat list sorted by name or category
    const sortedItems = [...itemsData].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    content = (
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-emerald-600 text-white" : "bg-emerald-400"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-emerald-600 text-white" : "bg-emerald-400"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-3 py-1 rounded ${
            sortBy === "group" ? "bg-emerald-600 text-white" : "bg-emerald-400"
          }`}
        >
          Group by Category
        </button>
      </div>
      {content}
    </div>
  );
}
