"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Shopping", value: 15200 },
  { name: "Bills", value: 4200 },
  { name: "Food", value: 2650 },
  { name: "Entertainment", value: 2100 },
  { name: "Transport", value: 1480 },
];

const COLORS = ["#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6", "#10b981"];

// 👉 Custom label (percentage inside slices)
const renderCustomLabel = ({
  percent,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent > 0.05 ? ( // hide tiny slices
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {(percent * 100).toFixed(0)}%
    </text>
  ) : null;
};

export default function PieChartCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-black">
          Category Distribution
        </h3>
        <p className="text-xs text-gray-500">
          Percentage breakdown by category
        </p>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              formatter={(value: number) =>
                `KSh ${value.toLocaleString()}`
              }
            />

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              label={renderCustomLabel}
              labelLine={false}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
