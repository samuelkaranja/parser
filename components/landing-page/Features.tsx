import {
  Zap,
  PieChart,
  BarChart3,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Instant Parsing",
    description:
      "Upload your M-Pesa statement and get instant results. Our AI extracts and categorizes all transactions in seconds.",
    icon: Zap,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Smart Categories",
    description:
      "Automatically categorize spending into Transport, Food, Bills, Shopping and more using intelligent AI.",
    icon: PieChart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Visual Insights",
    description:
      "Beautiful charts and graphs that transform complex data into clear, actionable insights.",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Trend Analysis",
    description:
      "Track spending patterns over time and discover areas where you can save money.",
    icon: TrendingUp,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your data is encrypted and secure. We never store your statements permanently.",
    icon: Shield,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Real-Time Updates",
    description:
      "Get instant insights as soon as you upload your statement. No waiting.",
    icon: Clock,
    color: "bg-teal-100 text-teal-600",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-3xl sm:text-4xl text-black font-bold">
            Everything You Need for{" "}
            <span className="text-green-600">Financial Clarity</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Powerful AI-driven tools to help you understand and optimize your
            M-Pesa spending habits.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-200 hover:cursor-pointer transition duration-300 bg-white flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${feature.color}`}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg text-black font-semibold">{feature.title}</h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
