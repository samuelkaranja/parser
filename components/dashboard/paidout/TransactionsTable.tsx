"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function TransactionsTable() {
  const transactions = [
    {
      id: "TXN002",
      recipient: "Uber Kenya",
      category: "Transport",
      date: "2026-03-11 09:15",
      type: "Payment to",
      amount: "-KSh 450",
    },
    {
      id: "TXN003",
      recipient: "Naivas Supermarket",
      category: "Shopping",
      date: "2026-03-10 16:42",
      type: "Payment to",
      amount: "-KSh 3,200",
    },
    {
      id: "TXN005",
      recipient: "KPLC Prepaid",
      category: "Bills",
      date: "2026-03-08 18:20",
      type: "Payment to",
      amount: "-KSh 1,500",
    },
  ];

  const categoryColors: Record<string, string> = {
    Transport: "bg-blue-100 text-blue-600",
    Shopping: "bg-purple-100 text-purple-600",
    Bills: "bg-yellow-100 text-yellow-700",
    Food: "bg-red-100 text-red-600",
    Entertainment: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-3">

        <div>
          <h3 className="text-xl font-semibold text-black">
            All Outgoing Transactions
          </h3>
          <p className="text-sm text-gray-500">
            Complete list of all payments made
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex items-center gap-3">

          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              placeholder="Search by recipient or category..."
              className="outline-none text-black"
            />
          </div>

          <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg text-sm text-black">
            <SlidersHorizontal size={16} />
            More Filters
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="text-gray-500 border-b border-gray-200">
              <th className="py-4 text-left">Transaction ID</th>
              <th className="text-left">Recipient</th>
              <th className="text-left">Category</th>
              <th className="text-left">Date & Time</th>
              <th className="text-left">Type</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b last:border-none hover:bg-gray-50"
              >

                <td className="py-4 font-medium text-gray-700">
                  {tx.id}
                </td>

                {/* Recipient */}
                <td>
                  <div className="flex items-center gap-3 text-black">

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                      {tx.recipient.charAt(0)}
                    </div>

                    {tx.recipient}

                  </div>
                </td>

                {/* Category */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[tx.category]
                    }`}
                  >
                    {tx.category}
                  </span>
                </td>

                {/* Date */}
                <td className="text-gray-600">
                  {tx.date}
                </td>

                {/* Type */}
                <td>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs text-black">
                    {tx.type}
                  </span>
                </td>

                {/* Amount */}
                <td className="text-right font-semibold text-red-500">
                  {tx.amount}
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>

      {/* Footer Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">

        <p>Showing 3 of 14 transactions</p>

        <div className="flex gap-2">

          <button className="border px-3 py-1 rounded-md">
            Previous
          </button>

          <button className="bg-red-500 text-white px-3 py-1 rounded-md">
            1
          </button>

          <button className="border px-3 py-1 rounded-md">
            Next
          </button>

        </div>

      </div>

    </div>
  );
}
