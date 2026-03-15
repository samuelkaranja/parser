"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sep", income: 80000, expense: 40000 },
  { month: "Oct", income: 90000, expense: 45000 },
  { month: "Nov", income: 85000, expense: 50000 },
  { month: "Dec", income: 92000, expense: 30000 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <h3 className="text-black text-xl font-semibold mb-4">
        Monthly Income vs Expenses
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" color="black" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="income" fill="#22c55e" />
          <Bar dataKey="expense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
