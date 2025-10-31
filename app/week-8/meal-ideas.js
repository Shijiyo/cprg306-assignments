"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  async function loadMealIdeas() {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }

  return (
    <div className="bg-emerald-300 p-4 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Meal Ideas for:{" "}
        <span className="text-emerald-700 capitalize">{ingredient}</span>
      </h2>

      {!ingredient && (
        <p className="text-gray-700">Select an item to view meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-700">No meal ideas found.</p>
      )}

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center gap-3 bg-emerald-200 rounded p-2 shadow hover:scale-[1.02] transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-14 h-14 object-cover rounded"
            />
            <span className="font-medium text-gray-800">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
