import { Download } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-xl">
      <div>
        <h1 className="text-2xl text-black font-bold">Spending Categories</h1>
        <p className="text-gray-500 text-sm">
          Comprehensive breakdown of your spending patterns
        </p>
      </div>

      <div className="flex gap-3">
        <button className="border border-gray-200 px-4 py-2 text-black rounded-lg text-sm">
          Last 30 Days
        </button>

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
          <Download size={16} />
          Export Report
        </button>
      </div>
    </div>
  );
}
