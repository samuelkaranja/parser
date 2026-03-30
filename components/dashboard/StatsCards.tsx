import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const cards = [
    { title: "Total Money In", amount: "KSh 97,700", change: "+12.5%", gradient: "from-emerald-500 to-emerald-600",
    icon: ArrowDownRight, },
    { title: "Total Money Out", amount: "KSh 26,430", change: "-8.2%", gradient: "from-red-500 to-rose-600",
    icon: ArrowUpRight, },
    { title: "Net Balance", amount: "KSh 71,270", change: "+KSh 15,300", gradient: "from-orange-500 to-gray-600",
    icon: ArrowUpRight, },
    { title: "Total Transactions", amount: "20", change: "", gradient: "from-red-500 to-blue-600",
    icon: ArrowUpRight, },
  ];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
      const Icon = card.icon;
      
      return (
        <div
          key={index}
          className={`p-6 rounded-xl border-gray-200 shadow-lg hover:shadow-xl hover:border-emerald-600 hover:cursor-pointer bg-linear-to-br ${card.gradient}`}
        >
          <div className="flex justify-between items-center">
          <p className="text-white text-sm font-medium">{card.title}:</p>
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
       	  <Icon size={18} />
       	  </div>
          </div>

          <h2 className="text-2xl text-white font-extrabold mt-2">{card.amount}</h2>

          {card.change && (
            <p className="text-white text-sm mt-1">{card.change}</p>
          )}
        </div>
      )})}
    </div>
  );
}
