"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", amount: 5000 },
  { day: "Tue", amount: 8000 },
  { day: "Wed", amount: 6000 },
  { day: "Thu", amount: 2000 },
  { day: "Fri", amount: 1000 },
  { day: "Sat", amount: 20000 },
  { day: "Sun", amount: 75000 },
];

export default function IncomeChart() {
  return (
    <div className="bg-white p-5 rounded-xl border h-[350px]">
      <h3 className="text-black font-semibold mb-4">Daily Income Trend</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
