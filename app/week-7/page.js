"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-emerald-200 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-black mb-6">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />

      <div className="mt-6 text-center">
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
