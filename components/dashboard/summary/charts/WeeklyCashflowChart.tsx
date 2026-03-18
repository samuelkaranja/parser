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
  { week: "Week 1", value: 7000 },
  { week: "Week 2", value: -3500 },
  { week: "Week 3", value: 2500 },
  { week: "Week 4", value: 7000 },
];

// Format currency (shorter + cleaner)
const formatCurrency = (value: number) =>
  `${value >= 0 ? "" : "-"}${Math.abs(value) / 1000}k`;

export default function WeeklyCashflowChart() {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-85 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">
          Weekly Net Cashflow
        </h3>
        <p className="text-sm text-gray-500">Income minus expenses by week</p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* X Axis */}
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12, fill: "#6b7280" }} // subtle
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis (FIXED HERE) */}
            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fontSize: 11, fill: "#9ca3af" }} // smaller + lighter
              axisLine={false}
              tickLine={false}
              width={40} // tighter spacing
            />

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

            {/* Bars */}
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.value >= 0 ? "#22c55e" : "#ef4444"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
