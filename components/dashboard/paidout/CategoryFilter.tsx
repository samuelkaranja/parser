"use client";

import {
  Car,
  ShoppingBag,
  Music,
  Utensils,
  Receipt,
} from "lucide-react";

export default function CategoryFilter() {
  const categories = [
    { name: "All Categories", count: null },
    { name: "Transport", icon: Car, count: 3 },
    { name: "Shopping", icon: ShoppingBag, count: 4 },
    { name: "Entertainment", icon: Music, count: 2 },
    { name: "Food", icon: Utensils, count: 2 },
    { name: "Bills", icon: Receipt, count: 3 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h3 className="text-black font-semibold mb-4">
        Filter by Category
      </h3>

      <div className="flex flex-wrap gap-3">

        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm border transition ${
                index === 0
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {Icon && <Icon size={16} />}

              <span>{cat.name}</span>

              {cat.count && (
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}
