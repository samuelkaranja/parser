"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Transport", value: 4000 },
  { name: "Shopping", value: 6000 },
  { name: "Entertainment", value: 3000 },
  { name: "Food", value: 2500 },
  { name: "Bills", value: 7000 },
];

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
];

export default function SpendingPieChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-black font-semibold mb-4">
        Spending by Category
      </h3>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label={({ percent }) =>
                `${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number) => `KSh ${value}`}
            />

            <Legend
              verticalAlign="bottom"
              height={36}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
