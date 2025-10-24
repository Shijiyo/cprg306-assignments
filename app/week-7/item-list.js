"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let content;

  if (sortBy === "group") {
    // Create a grouped copy without mutating props
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    // Sort categories and items alphabetically
    const sortedCategories = Object.keys(grouped).sort();
    sortedCategories.forEach((cat) => {
      grouped[cat] = [...grouped[cat]].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });

    content = (
      <div>
        {sortedCategories.map((category) => (
          <div key={category} className="mb-4">
            <h2 className="font-bold capitalize mb-2 text-gray-800">
              {category}
            </h2>
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
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
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
      {/* Added mt-8 to push buttons down from the component above */}
      <div className="flex gap-2 mt-8 mb-4 justify-center flex-wrap">
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
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded font-semibold ${
            sortBy === "group"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-400 text-gray-900 hover:bg-emerald-500"
          }`}
        >
          Group by Category
        </button>
      </div>

      {content}
    </div>
  );
}
