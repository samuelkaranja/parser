export default function StatsCards() {
  const cards = [
    { title: "Total Money In", amount: "KSh 97,700", change: "+12.5%" },
    { title: "Total Money Out", amount: "KSh 26,430", change: "-8.2%" },
    { title: "Net Balance", amount: "KSh 71,270", change: "+KSh 15,300" },
    { title: "Total Transactions", amount: "20", change: "" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl border-gray-200 hover:shadow-xl hover:border-emerald-600 hover:cursor-pointer"
        >
          <p className="text-gray-500 text-sm">{card.title}:</p>

          <h2 className="text-2xl text-black font-extrabold mt-2">{card.amount}</h2>

          {card.change && (
            <p className="text-green-600 text-sm mt-1">{card.change}</p>
          )}
        </div>
      ))}
    </div>
  );
}
