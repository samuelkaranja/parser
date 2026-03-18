import { Layers, Target, CircleDollarSign } from "lucide-react";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Spending */}
      <div className="bg-linear-to-r from-red-500 to-pink-500 text-white p-5 rounded-2xl hover:shadow-2xl hover:cursor-pointer">
        {/* Title + Icon */}
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm font-medium opacity-90">Total Spending</p>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
            <CircleDollarSign size={16} />
          </div>
        </div>

        {/* Value */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">KSh 25,630</h2>
          <p className="text-xs opacity-80 mt-1">Across all categories</p>
        </div>
      </div>

      {/* Active Categories */}
      <div className="bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-2xl hover:cursor-pointer">
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm text-gray-500">Active Categories</p>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100">
            <Layers className="text-purple-600" size={16} />
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl text-black font-bold">5</h2>
          <p className="text-xs text-gray-400 mt-1">Spending categories</p>
        </div>
      </div>

      {/* Highest Category */}
      <div className="bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-2xl hover:cursor-pointer">
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm text-gray-500">Highest Category</p>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
            <Target className="text-blue-600" size={16} />
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl text-black font-bold">KSh 15,200</h2>
          <p className="text-xs text-gray-400 mt-1">Shopping</p>
        </div>
      </div>

      {/* Average */}
      <div className="bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-2xl hover:cursor-pointer">
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm text-gray-500">Avg per Category</p>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100">
            <CircleDollarSign className="text-orange-600" size={16} />
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl text-black font-bold">KSh 5,126</h2>
          <p className="text-xs text-gray-400 mt-1">Average spending</p>
        </div>
      </div>
    </div>
  );
}
