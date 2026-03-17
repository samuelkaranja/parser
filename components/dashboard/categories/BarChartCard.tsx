"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { name: "Transport", value: 1480, color: "#10B981" },
  { name: "Shopping", value: 15200, color: "#3B82F6" },
  { name: "Entertainment", value: 2100, color: "#8B5CF6" },
  { name: "Food", value: 2650, color: "#F59E0B" },
  { name: "Bills", value: 4200, color: "#EF4444" },
];

export default function BarChartCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-[350px] flex flex-col">
      {/* Title */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">
          Spending by Category
        </h3>
        <p className="text-xs text-gray-400">
          Total amount spent per category
        </p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`KSh ${value.toLocaleString()}`, "Amount"]}
            />

            {/* Bars */}
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              barSize={40}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
