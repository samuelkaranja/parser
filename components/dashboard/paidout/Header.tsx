import { Download } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl text-black font-bold">Paid Out Transactions</h1>
        <p className="text-gray-500">
          Track and analyze all your outgoing payments
        </p>
      </div>

      <div className="flex gap-3">
        <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-black">
          Last 30 Days
        </button>

        <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
          <Download size={16} />
          Export Report
        </button>
      </div>
    </div>
  );
}
