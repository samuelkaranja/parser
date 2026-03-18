export default function SummaryHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-2xl text-black font-bold">Financial Summary</h1>
        <p className="text-gray-500 text-sm">
          Complete overview of your M-Pesa financial activity
        </p>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-black">
          March 2026
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
          Export Report
        </button>
      </div>
    </div>
  );
}
