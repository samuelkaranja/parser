import CategoryFilter from "@/components/dashboard/paidout/CategoryFilter";
import Header from "@/components/dashboard/paidout/Header";
import SpendingPieChart from "@/components/dashboard/paidout/SpendingPieChart";
import StatsCards from "@/components/dashboard/paidout/StatsCards";
import TransactionsTable from "@/components/dashboard/paidout/TransactionsTable";
import WeeklyBarChart from "@/components/dashboard/paidout/WeeklyBarChart";

export default function PaidOutPage() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-white rounded-lg">
        <Header />
      </div>

      <StatsCards />

      <CategoryFilter />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingPieChart />
        <WeeklyBarChart />
      </div>

      <TransactionsTable />
    </div>
  );
}
