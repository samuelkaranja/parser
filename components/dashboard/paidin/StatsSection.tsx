import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        title="Total Received"
        value="KSh 97,700"
        subtitle="+12.5% from last month"
      />

      <StatCard
        title="Total Transactions"
        value="6"
        subtitle="1 new this week"
      />

      <StatCard
        title="Average Amount"
        value="KSh 16,283"
        subtitle="Per transaction"
      />

      <StatCard
        title="Largest Payment"
        value="KSh 75,000"
        subtitle="Highest single payment"
      />
    </div>
  );
}
