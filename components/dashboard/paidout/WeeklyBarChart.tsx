"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", amount: 8500 },
  { week: "Week 2", amount: 12500 },
  { week: "Week 3", amount: 9500 },
  { week: "Week 4", amount: 10000 },
];

export default function WeeklyBarChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-black font-semibold mb-4">
        Weekly Spending Trend
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            {/* Grid lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            {/* X axis */}
            <XAxis
              dataKey="week"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y axis */}
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              formatter={(value: number) => `KSh ${value}`}
            />

            {/* Bars */}
            <Bar
              dataKey="amount"
              fill="#ef4444"
              radius={[6, 6, 0, 0]}
              barSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
