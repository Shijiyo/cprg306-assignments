"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

// ⬅️ ADD: Import Firestore service
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);   // ⬅️ UPDATED: starts empty
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  // ⬅️ PART 6: Block page if not logged in
  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-emerald-100 text-center p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          You must be logged in to access the Shopping List.
        </h1>
        <Link
          href="/week-9"
          className="bg-emerald-400 px-4 py-2 rounded-lg text-gray-800 font-semibold shadow hover:bg-emerald-500 transition"
        >
          Go to Login Page
        </Link>
      </main>
    );
  }

  // ⬅️ PART 4: Load items from Firestore
  async function loadItems() {
    const userItems = await getItems(user.uid);
    setItems(userItems);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  // API Clean Up
  function cleanItemName(name) {
    return name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
  }

  // When an item is clicked
  function handleItemSelect(item) {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  }

  // Add new item handler 
  async function handleAddItem(newItem) {
    // ⬅️ SAVE TO FIRESTORE  
    const id = await addItem(user.uid, newItem);

    // attach Firestore id
    const itemWithId = { ...newItem, id };

    // update state
    setItems((prev) => [...prev, itemWithId]);
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
