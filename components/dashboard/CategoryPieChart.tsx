"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieLabelRenderProps,
} from "recharts";

const data = [
  { name: "Shopping", value: 500 },
  { name: "Transport", value: 200 },
  { name: "Bills", value: 200 },
  { name: "Food", value: 100 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

// Custom label renderer
const renderCustomLabel = (props: PieLabelRenderProps) => {
  const { name, percent } = props;

  return `${name ?? ""} ${((percent ?? 0) * 100).toFixed(0)}%`;
};

export default function CategoryPieChart() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="text-black text-lg font-semibold mb-4">
        Spending by Category
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label={renderCustomLabel}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
