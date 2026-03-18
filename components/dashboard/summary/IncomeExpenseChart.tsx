"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Sep", income: 85000, expenses: 40000 },
  { month: "Oct", income: 90000, expenses: 50000 },
  { month: "Nov", income: 95000, expenses: 65000 },
  { month: "Dec", income: 92000, expenses: 52000 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-75">
      <h3 className="font-semibold mb-3">Income vs Expenses</h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#16a34a"
            fill="#86efac"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#ef4444"
            fill="#fca5a5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
