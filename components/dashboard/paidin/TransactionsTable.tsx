"use client";

import { Search, Filter, User } from "lucide-react";

interface Transaction {
  id: string;
  sender: string;
  date: string;
  type: string;
  amount: string;
  balance: string;
}

const transactions: Transaction[] = [
  {
    id: "TXN001",
    sender: "John Kamau",
    date: "2026-03-12 14:23",
    type: "Received",
    amount: "+KSh 5,000",
    balance: "KSh 45,000",
  },
  {
    id: "TXN004",
    sender: "Mary Wanjiku",
    date: "2026-03-09 12:30",
    type: "Received",
    amount: "+KSh 2,500",
    balance: "KSh 43,650",
  },
  {
    id: "TXN007",
    sender: "Salary - ABC Ltd",
    date: "2026-03-06 11:05",
    type: "Received",
    amount: "+KSh 75,000",
    balance: "KSh 43,850",
  },
  {
    id: "TXN011",
    sender: "David Omondi",
    date: "2026-03-02 10:10",
    type: "Received",
    amount: "+KSh 3,000",
    balance: "KSh 44,700",
  },
  {
    id: "TXN014",
    sender: "Grace Muthoni",
    date: "2026-02-27 14:25",
    type: "Received",
    amount: "+KSh 8,000",
    balance: "KSh 47,850",
  },
  {
    id: "TXN018",
    sender: "Peter Njoroge",
    date: "2026-02-23 15:30",
    type: "Received",
    amount: "+KSh 4,200",
    balance: "KSh 44,230",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-white border rounded-xl p-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-semibold text-2xl text-black">
            All Incoming Transactions
          </h3>
          <p className="text-sm text-gray-500">
            Complete list of payments received
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-black" />

            <input
              type="text"
              placeholder="Search by sender or transaction ID..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-black"
            />
          </div>

          <button className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded text-sm text-black">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b border-gray-200">
            <tr>
              <th className="text-left py-3">Transaction ID</th>
              <th className="text-left py-3">Sender</th>
              <th className="text-left py-3">Date & Time</th>
              <th className="text-left py-3">Type</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Balance After</th>
            </tr>
          </thead>

          <tbody className="text-black">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-gray-200 last:border-none"
              >
                <td className="py-4 font-medium">{tx.id}</td>

                {/* Sender */}
                <td className="py-4 flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <User size={16} />
                  </div>

                  {tx.sender}
                </td>

                <td>{tx.date}</td>

                {/* Type Badge */}
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {tx.type}
                  </span>
                </td>

                <td className="text-green-600 font-semibold">{tx.amount}</td>

                <td>{tx.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 text-sm text-gray-500">
        <p>Showing 6 of 6 transactions</p>

        {/* Pagination */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <button className="border px-3 py-1 rounded-lg text-gray-400">
            Previous
          </button>

          <button className="bg-green-600 text-white px-3 py-1 rounded-lg">
            1
          </button>

          <button className="border px-3 py-1 rounded-lg text-gray-400">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
