export default function Stats() {
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Statements Parsed" },
    { value: "1M+", label: "Transactions Analyzed" },
    { value: "99.9%", label: "Accuracy Rate" },
  ];

  return (
    <section className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>

            <p className="text-gray-300 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
