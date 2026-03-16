"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Salary - ABC Ltd", amount: 80000 },
  { name: "Grace Muthoni", amount: 12000 },
  { name: "John Kamau", amount: 7000 },
  { name: "Peter Njoroge", amount: 5000 },
  { name: "David Omondi", amount: 3000 },
];

export default function TopSendersChart() {
  return (
    <div className="bg-white p-5 rounded-xl border h-[350px]">
      <h3 className="text-black font-semibold mb-4">Top Senders</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />

          <Tooltip />

          <Bar dataKey="amount" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
