"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Shopping", value: 15200, color: "#3b82f6" },
  { name: "Transport", value: 6800, color: "#ef4444" },
  { name: "Food", value: 5200, color: "#f59e0b" },
  { name: "Bills", value: 4100, color: "#8b5cf6" },
  { name: "Others", value: 3100, color: "#10b981" },
];

export default function CategoryPieChart() {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-85 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">
          Spending by Category
        </h3>
        <p className="text-sm text-gray-500">Where your money goes</p>
      </div>

      {/* Content */}
      <div className="flex flex- md:flex-1 items-center justify-between gap-4">
        {/* Pie Chart */}
        <div className="w-1/2 h-full">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={0} // solid pie (not donut)
                outerRadius={100}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-1/2 space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600">{item.name}</span>
              </div>

              <span className="font-medium text-gray-800">
                KSh {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
