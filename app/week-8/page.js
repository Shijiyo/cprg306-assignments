"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Clean up text to make it API-friendly
  function cleanItemName(name) {
    return name
      .split(",")[0] // remove extra descriptions like “, 1 kg”
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emojis and symbols
      .trim()
      .toLowerCase();
  }

  // When an item is clicked
  function handleItemSelect(item) {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  }

  // Add new item handler 
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-emerald-200 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-black mb-6">
        Shopping List + Meal Ideas 
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        <div className="w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-green-300 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
