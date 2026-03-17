import {
  Car,
  ShoppingBag,
  Music,
  Utensils,
  Receipt,
} from "lucide-react";

const categories = [
  {
    name: "Transport",
    amount: 1480,
    percent: 5.8,
    txns: 3,
    icon: Car,
    color: "bg-green-100 text-green-600",
    progress: "bg-green-500",
  },
  {
    name: "Shopping",
    amount: 15200,
    percent: 59.3,
    txns: 4,
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-600",
    progress: "bg-blue-500",
  },
  {
    name: "Entertainment",
    amount: 2100,
    percent: 8.2,
    txns: 2,
    icon: Music,
    color: "bg-purple-100 text-purple-600",
    progress: "bg-purple-500",
  },
  {
    name: "Food",
    amount: 2650,
    percent: 10.3,
    txns: 2,
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
    progress: "bg-orange-500",
  },
  {
    name: "Bills",
    amount: 4200,
    percent: 16.4,
    txns: 3,
    icon: Receipt,
    color: "bg-red-100 text-red-600",
    progress: "bg-red-500",
  },
];

export default function CategoryCards() {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-4">
        Category Overview
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <div
              key={cat.name}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:cursor-pointer"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div
                  className={`p-2 rounded-lg ${cat.color}`}
                >
                  <Icon size={18} />
                </div>

                <span className="text-xs text-gray-400">
                  {cat.txns} txns
                </span>
              </div>

              {/* Title */}
              <p className="mt-3 text-sm text-gray-500">
                {cat.name}
              </p>

              {/* Amount */}
              <h3 className="text-lg text-black font-semibold mt-1">
                KSh {cat.amount.toLocaleString()}
              </h3>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <span>{cat.percent}%</span>
              </div>

              {/* Progress */}
              <div className="h-1.5 bg-gray-100 rounded-full mt-2">
                <div
                  className={`h-1.5 rounded-full ${cat.progress}`}
                  style={{ width: `${cat.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
