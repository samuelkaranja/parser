export default function TransactionsTable() {
  const transactions = [
    {
      id: "TXN001",
      date: "2026-03-12",
      type: "Paid In",
      party: "John Kamau",
      amount: "+5000",
    },
    {
      id: "TXN002",
      date: "2026-03-11",
      type: "Paid Out",
      party: "Uber Kenya",
      amount: "-450",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border overflow-x-auto">
      <h3 className="text-black text-2xl font-semibold mb-4">
        Recent Transactions
      </h3>

      <table className="w-full text-sm">
        <thead className="text-black">
          <tr>
            <th className="text-left py-5">Transaction ID</th>
            <th className="text-left">Date</th>
            <th className="text-left">Type</th>
            <th className="text-left">Party</th>
            <th className="text-left">Amount</th>
          </tr>
        </thead>

        <tbody className="text-black">
          {transactions.map((t) => (
            <tr key={t.id} className="border-t border-gray-200">
              <td className="py-3">{t.id}</td>
              <td>{t.date}</td>
              <td>{t.type}</td>
              <td>{t.party}</td>
              <td>{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
