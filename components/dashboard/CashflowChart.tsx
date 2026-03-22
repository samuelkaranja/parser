"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", value: 5000 },
  { week: "Week 2", value: -2000 },
  { week: "Week 3", value: 7000 },
  { week: "Week 4", value: 1000 },
  { week: "Week 5", value: -1500 },
  { week: "Week 6", value: 11000 },
  { week: "Week 7", value: -5000 },
  { week: "Week 8", value: 2000 },
];

export default function CashflowChart() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="text-black text-lg font-semibold mb-4">Cashflow Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="week" stroke="#000" />
          <YAxis stroke="#000" />
          <Tooltip cursor={{ fill: "transparent" }} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
