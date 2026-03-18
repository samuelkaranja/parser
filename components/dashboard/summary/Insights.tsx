import {
  CheckCircle,
  Info,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const insights = [
  {
    title: "Excellent Savings Rate!",
    description:
      "You're saving 72.9% of your income. This is well above the recommended 20% benchmark. Keep up the excellent work maintaining this healthy savings habit!",
    icon: CheckCircle,
    bg: "bg-green-50",
    color: "text-green-700",
    border: "border-green-200",
    iconColor: "text-green-600",
  },
  {
    title: "Monitor Shopping Expenses",
    description:
      "Your Shopping category accounts for 57.5% of total spending (KSh 15,200). Consider setting a monthly budget to optimize this category.",
    icon: Info,
    bg: "bg-blue-50",
    color: "text-blue-800",
    border: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "Stable Income Stream",
    description:
      "Your income has remained consistent at an average of KSh 89,071 per month. This stability is excellent for long-term financial planning and goal setting.",
    icon: TrendingUp,
    bg: "bg-purple-50",
    color: "text-purple-800",
    border: "border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    title: "Opportunity to Increase Savings",
    description:
      "While your savings rate is strong, you could potentially save an additional KSh 2,643 per month by reducing discretionary spending by just 10%.",
    icon: AlertCircle,
    bg: "bg-orange-50",
    color: "text-orange-800",
    border: "border-orange-200",
    iconColor: "text-orange-600",
  },
];

export default function Insights() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-semibold text-lg text-black">
          Insights & Recommendations
        </h2>
        <p className="text-sm text-gray-500">
          AI-powered financial insights based on your spending patterns
        </p>
      </div>

      {/* Insight Cards */}
      <div className="space-y-4">
        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex gap-4 p-4 rounded-lg border ${item.bg} ${item.border}`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white ${item.iconColor}`}
              >
                <Icon size={20} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className={`font-semibold text-sm md:text-base ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
