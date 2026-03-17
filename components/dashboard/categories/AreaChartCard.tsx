"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", value: 4000 },
  { week: "Week 2", value: 6000 },
  { week: "Week 3", value: 8000 },
  { week: "Week 4", value: 9500 },
];

export default function AreaChartCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-[350px] flex flex-col">
      {/* Title */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">Weekly Spending Pattern</h3>
        <p className="text-sm text-gray-500">
          Total spending this month by week
        </p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Gradient */}
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            {/* Axes */}
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`KSh ${value}`, "Spending"]}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorSpending)"
              dot={false}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
