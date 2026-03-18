"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

const data = [
  { week: "Week 1", value: 6000 },
  { week: "Week 2", value: -4500 },
  { week: "Week 3", value: 8500 },
  { week: "Week 4", value: -5200 },
  { week: "Week 5", value: 16000 },
  { week: "Week 6", value: 4000 },
];

export default function MonthlyCashflowChart() {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-85 flex flex-col">
      {/* Header */}
      <div className="mb-3">
        <h3 className="font-semibold text-lg text-black">
          Monthly Cashflow Analysis
        </h3>
        <p className="text-xs text-gray-500">Net position over time</p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            {/* Gradient */}
            <defs>
              <linearGradient id="cashflowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            {/* Zero Line */}
            <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />

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
              formatter={(value, name) =>
                value ? `KSh ${value.toLocaleString()}` : ""
              }
              labelFormatter={() => "Net Cashflow"}
            />

            {/* Line */}
            <Line
              type="natural"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
              fill="url(#cashflowGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
