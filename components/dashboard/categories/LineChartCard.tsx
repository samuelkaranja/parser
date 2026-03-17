"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  {
    month: "Oct",
    transport: 1200,
    shopping: 5000,
    entertainment: 800,
    food: 1500,
    bills: 1800,
  },
  {
    month: "Nov",
    transport: 1100,
    shopping: 6500,
    entertainment: 900,
    food: 1400,
    bills: 1700,
  },
  {
    month: "Dec",
    transport: 1300,
    shopping: 8000,
    entertainment: 1200,
    food: 1600,
    bills: 2000,
  },
  {
    month: "Jan",
    transport: 1400,
    shopping: 9000,
    entertainment: 1500,
    food: 1800,
    bills: 2200,
  },
  {
    month: "Feb",
    transport: 900,
    shopping: 4500,
    entertainment: 1100,
    food: 1300,
    bills: 1600,
  },
  {
    month: "Mar",
    transport: 1000,
    shopping: 5000,
    entertainment: 1000,
    food: 1400,
    bills: 1700,
  },
];

export default function LineChartCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-95 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">
          Category Trends Over Time
        </h3>
        <p className="text-xs text-gray-500">6-month spending patterns</p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            />

            {/* Lines */}
            <Line
              type="monotone"
              dataKey="transport"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="shopping"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="entertainment"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="food"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="bills"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />

            {/* Legend */}
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: "12px" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
