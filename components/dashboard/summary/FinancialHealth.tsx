"use client";

import { Shield, TrendingUp, BarChart3, Zap } from "lucide-react";

export default function FinancialHealth() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-5">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-black">
            Financial Health Score
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Based on your income, expenses, and savings patterns
          </p>
        </div>

        <div className="bg-green-600 p-2 rounded-lg">
          <Shield className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        
        {/* Circular Score */}
        <div className="relative w-24 h-24 shrink-0">
          <svg className="w-full h-full -rotate-90">
            {/* Background */}
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress */}
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#16a34a"
              strokeWidth="6"
              fill="none"
              strokeDasharray={251.2}
              strokeDashoffset={0}
              strokeLinecap="round"
            />
          </svg>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold text-gray-800">
              100
            </span>
            <span className="text-[10px] text-gray-500">
              Score
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-3">
          
          {/* Income Stability */}
          <div className="flex gap-2.5 bg-green-50 p-5 rounded-lg">
            <div className="bg-green-100 p-1.5 rounded-md h-fit">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-green-600">
                Income Stability
              </p>
              <p className="text-xl font-extrabold text-emerald-800 my-1">
                Excellent
              </p>
              <p className="text-sm text-green-600">
                Consistent income flow
              </p>
            </div>
          </div>

          {/* Spending Pattern */}
          <div className="flex gap-2.5 bg-blue-50 p-5 rounded-lg">
            <div className="bg-blue-100 p-1.5 rounded-md h-fit">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-blue-500">
                Spending Pattern
              </p>
              <p className="text-xl font-extrabold text-blue-800 my-1">
                Consistent
              </p>
              <p className="text-sm text-blue-600">
                Well-controlled expenses
              </p>
            </div>
          </div>

          {/* Savings Rate */}
          <div className="flex gap-2.5 bg-purple-50 p-5 rounded-lg">
            <div className="bg-purple-100 p-1.5 rounded-md h-fit">
              <Zap className="w-4 h-4 text-purple-600" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-purple-500">
                Savings Rate
              </p>
              <p className="text-xl font-extrabold text-gray-800 my-1">
                73%
              </p>
              <p className="textsm text-purple-600">
                Above average
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px]">
          <span className="text-[16px] text-black">
            Overall Financial Health
          </span>
          <span className="text-[16px] text-green-600 font-bold">
            Excellent
          </span>
        </div>

        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-full bg-green-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}
