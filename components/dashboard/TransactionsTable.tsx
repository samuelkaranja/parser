"use client";

const data = [
  {
    id: "TXN001",
    date: "2026-03-12 14:23",
    type: "Paid In",
    party: "John Kamau",
    amount: "+KSh 5,000",
    balance: "KSh 45,000",
  },
  {
    id: "TXN002",
    date: "2026-03-11 09:15",
    type: "Paid Out",
    party: "Uber Kenya",
    amount: "-KSh 450",
    balance: "KSh 40,000",
  },
  {
    id: "TXN003",
    date: "2026-03-10 16:42",
    type: "Paid Out",
    party: "Naivas Supermarket",
    amount: "-KSh 3,200",
    balance: "KSh 40,450",
  },
  {
    id: "TXN004",
    date: "2026-03-09 12:30",
    type: "Paid In",
    party: "Mary Wanjiku",
    amount: "+KSh 2,500",
    balance: "KSh 43,650",
  },
  {
    id: "TXN005",
    date: "2026-03-08 18:20",
    type: "Paid Out",
    party: "KPLC Prepaid",
    amount: "-KSh 1,500",
    balance: "KSh 41,150",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="font-semibold text-2xl text-black mb-5">
        Recent Transactions
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* Header */}
          <thead className="border-b border-gray-200">
            <tr className="text-black text-left">
              <th className="pb-5">Transaction ID</th>
              <th className="pb-5">Date</th>
              <th className="pb-5">Type</th>
              <th className="pb-5">Party</th>
              <th className="pb-5">Amount</th>
              <th className="pb-5">Balance</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y text-black">
            {data.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-50 hover:cursor-pointer transition">
                {/* ID */}
                <td className="py-4 font-medium">{tx.id}</td>

                {/* Date */}
                <td className="py-4 text-gray-600">{tx.date}</td>

                {/* Type Badge */}
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        tx.type === "Paid In"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {tx.type}
                  </span>
                </td>

                {/* Party */}
                <td className="py-4">{tx.party}</td>

                {/* Amount */}
                <td
                  className={`py-4 font-medium
                    ${
                      tx.amount.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                >
                  {tx.amount}
                </td>

                {/* Balance */}
                <td className="py-4 text-gray-700">
                  {tx.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
