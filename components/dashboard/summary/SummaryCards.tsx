import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const cards = [
  {
    title: "Total Income",
    amount: "KSh 97,700",
    change: "+12.5%",
    changeType: "positive",
    gradient: "from-green-500 to-green-600",
    icon: ArrowUpRight,
  },
  {
    title: "Total Expenses",
    amount: "KSh 26,430",
    change: "-5.3%",
    changeType: "negative",
    gradient: "from-red-500 to-rose-600",
    icon: ArrowDownRight,
  },
  {
    title: "Net Savings",
    amount: "KSh 71,270",
    change: "72.9%",
    changeType: "neutral",
    gradient: "from-indigo-500 to-blue-600",
    icon: ArrowUpRight,
  },
];

export default function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = card.icon;

        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-lg bg-linear-to-br ${card.gradient}`}
          >
            {/* Floating Icon */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                <Icon size={18} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <p className="text-sm opacity-80">{card.title}</p>

              <h2 className="text-3xl font-bold tracking-tight">
                {card.amount}
              </h2>

              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`font-medium ${
                    card.changeType === "positive"
                      ? "text-green-100"
                      : card.changeType === "negative"
                        ? "text-red-100"
                        : "text-blue-100"
                  }`}
                >
                  {card.change}
                </span>

                <span className="opacity-80">from last month</span>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>
        );
      })}
    </div>
  );
}
