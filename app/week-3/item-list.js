// item-list.js
import React from "react";
import Item from "./item";

export default function ItemList() {
  const item1 = {
    name: "Milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "Bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "Eggs, 1 dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "Bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "Broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "Chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "Pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "Spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "Toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "Paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "Dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "Hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  // Store all items in an array for easy rendering
  const items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
  ];

  return (
    <ul className="max-w-md mx-auto mt-6 bg-emerald-500 p-4 rounded-lg shadow">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
