import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import CategoryPieChart from "@/components/dashboard/CategoryPieChart";
import CashflowChart from "@/components/dashboard/CashflowChart";
import TransactionsTable from "@/components/dashboard/TransactionsTable";

export default function DashboardPage() {
  return (
    <>
      <div className="p-4 bg-white">
        <Header />
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <CategoryPieChart />
      </div>

      <CashflowChart />

      <TransactionsTable />
    </>
  );
}
