import { DollarSign, Layers, Activity } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      title: "Expense Ratio",
      value: "27.1%",
      sub: "Of income spent",
      icon: DollarSign,
    },
    {
      title: "Total Categories",
      value: "5",
      sub: "Active spending categories",
      icon: Layers,
    },
    {
      title: "Avg Transaction",
      value: "KSh 1,888",
      sub: "Average expense amount",
      icon: Activity,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5 md:p-6 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg text-black font-semibold">Key Financial Metrics</h2>
        <p className="text-sm text-gray-500">
          Quick reference for your financial position
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 border border-gray-100 rounded-xl p-4 hover:shadow-sm transition"
            >
              {/* Text */}
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h3 className="text-lg text-black font-semibold mt-1">{item.value}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <Icon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
