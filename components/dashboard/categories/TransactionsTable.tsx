"use client";

import { Search, Filter } from "lucide-react";

const transactions = [
  {
    id: "TXN002",
    merchant: "Uber Kenya",
    category: "Transport",
    date: "2026-03-11 09:15",
    amount: -450,
    balance: 40000,
  },
  {
    id: "TXN003",
    merchant: "Naivas Supermarket",
    category: "Shopping",
    date: "2026-03-10 16:42",
    amount: -3200,
    balance: 40450,
  },
  {
    id: "TXN005",
    merchant: "KPLC Prepaid",
    category: "Bills",
    date: "2026-03-08 18:20",
    amount: -1500,
    balance: 41150,
  },
  {
    id: "TXN006",
    merchant: "Netflix Kenya",
    category: "Entertainment",
    date: "2026-03-07 14:15",
    amount: -1200,
    balance: 42650,
  },
];

const categoryStyles: Record<string, string> = {
  Transport: "bg-green-100 text-green-600",
  Shopping: "bg-blue-100 text-blue-600",
  Entertainment: "bg-purple-100 text-purple-600",
  Food: "bg-orange-100 text-orange-600",
  Bills: "bg-red-100 text-red-600",
};

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="font-semibold text-xl text-black">Category Transactions</h3>
          <p className="text-sm text-gray-500">
            All spending transactions
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex gap-2 w-full md:w-auto">
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 w-full md:w-72">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by merchant or transaction ID..."
              className="ml-2 outline-none text-sm text-black w-full"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-black">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-t border-b border-gray-200 text-left">
              <th className="py-5 px-5">Transaction ID</th>
              <th className="px-5">Merchant</th>
              <th className="px-5">Category</th>
              <th className="px-5">Date & Time</th>
              <th className="px-5">Amount</th>
              <th className="px-5">Balance After</th>
            </tr>
          </thead>

          <tbody className="text-black">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                {/* ID */}
                <td className="py-4 px-5 font-medium">{tx.id}</td>

                {/* Merchant */}
                <td className="py-4 px-5">
                  {tx.merchant}
                </td>

                {/* Category */}
                <td className="px-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryStyles[tx.category]
                    }`}
                  >
                    {tx.category}
                  </span>
                </td>

                {/* Date */}
                <td className="px-5 text-gray-500">{tx.date}</td>

                {/* Amount */}
                <td className="px-5 text-red-500 font-medium">
                  -KSh {Math.abs(tx.amount).toLocaleString()}
                </td>

                {/* Balance */}
                <td className="px-5 text-gray-700">
                  KSh {tx.balance.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-sm text-gray-500">
          Showing 4 of 14 transactions
        </p>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-200 rounded-md text-sm text-black">
            Previous
          </button>

          <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">
            1
          </button>

          <button className="px-3 py-1 border border-gray-200 rounded-md text-sm text-black">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
