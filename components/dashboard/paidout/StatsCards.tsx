import {
  ArrowUp,
  CreditCard,
  Wallet,
  TrendingUp,
} from "lucide-react";

export default function StatsCards() {
  const cards = [
    {
      title: "Total Spent",
      value: "KSh 26,430",
      description: "5.2% from last month",
      icon: ArrowUp,
      highlight: true,
    },
    {
      title: "Total Transactions",
      value: "14",
      description: "Across 5 categories",
      icon: CreditCard,
    },
    {
      title: "Average Spending",
      value: "KSh 1,888",
      description: "Per transaction",
      icon: Wallet,
    },
    {
      title: "Largest Expense",
      value: "KSh 5,500",
      description: "Single transaction",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`p-5 rounded-xl shadow-sm ${
              card.highlight ? "bg-red-500 text-white" : "bg-white"
            }`}
          >
            {/* Title + Icon */}
            <div className="flex items-center justify-between mb-3">
              <p
                className={`text-sm ${
                  card.highlight ? "text-white/80" : "text-gray-500"
                }`}
              >
                {card.title}
              </p>

              <div
                className={`p-2 rounded-lg ${
                  card.highlight ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                <Icon size={20} color="purple" />
              </div>
            </div>

            {/* Value */}
            <h2
              className={`text-2xl font-bold ${
                card.highlight ? "text-white" : "text-black"
              }`}
            >
              {card.value}
            </h2>

            {/* Description */}
            <p
              className={`text-xs mt-1 ${
                card.highlight ? "text-white/70" : "text-gray-400"
              }`}
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
