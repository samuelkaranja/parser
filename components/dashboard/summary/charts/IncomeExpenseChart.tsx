"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Sep", income: 85000, expenses: 40000 },
  { month: "Oct", income: 90000, expenses: 50000 },
  { month: "Nov", income: 98000, expenses: 65000 },
  { month: "Dec", income: 93000, expenses: 52000 },
  { month: "Jan", income: 95000, expenses: 48000 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-85 flex flex-col">
      {/* Header */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg text-black">
          Income vs Expenses Trend
        </h3>
        <p className="text-xs text-gray-500">7-month financial overview</p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e5e7eb"
              vertical={false}
            />

            {/* Axes */}
            <XAxis
              dataKey="month"
              tick={{ fontSize: 13, fill: "#000000" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />

            {/* Tooltip */}
            <Tooltip
              formatter={(value, name) =>
                value ? `KSh ${value.toLocaleString()}` : ""
              }
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                fontSize: "12px",
              }}
            />

            {/* Income Area */}
            <Area
              type="monotone"
              dataKey="income"
              stroke="#16a34a"
              fill="rgba(34,197,94,0.25)"
              strokeWidth={2}
              dot={false}
            />

            {/* Expenses Area */}
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#ef4444"
              fill="rgba(239,68,68,0.25)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend (matches your UI) */}
      <div className="flex items-center gap-4 mt-3 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-600" />
          <span className="text-gray-600">Income (KSh)</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-gray-600">Expenses (KSh)</span>
        </div>
      </div>
    </div>
  );
}
