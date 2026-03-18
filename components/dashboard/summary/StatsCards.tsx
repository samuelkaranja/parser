"use client";

import { TrendingUp, TrendingDown, ShoppingBag, Activity } from "lucide-react";

const stats = [
  {
    label: "Avg Monthly Income",
    value: "KSh 89,071",
    sub: "Last 7 months",
    icon: TrendingUp,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    label: "Avg Monthly Expenses",
    value: "KSh 47,947",
    sub: "Last 7 months",
    icon: TrendingDown,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    label: "Largest Category",
    value: "Shopping",
    sub: "KSh 15,200",
    icon: ShoppingBag,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    label: "Total Transactions",
    value: "20",
    sub: "This month",
    icon: Activity,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-xl hover:cursor-pointer"
          >
            {/* LEFT CONTENT */}
            <div className="space-y-1">
              <p className="text-sm text-gray-500">{stat.label}</p>

              <h3 className="text-lg font-semibold text-gray-900">
                {stat.value}
              </h3>

              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>

            {/* ICON */}
            <div
              className={`p-2 rounded-lg ${stat.iconBg} flex items-center justify-center`}
            >
              <Icon className={`w-4 h-4 ${stat.iconColor}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
