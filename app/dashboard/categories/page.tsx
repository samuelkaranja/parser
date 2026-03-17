import AreaChartCard from "@/components/dashboard/categories/AreaChartCard";
import BarChartCard from "@/components/dashboard/categories/BarChartCard";
import CategoryCards from "@/components/dashboard/categories/CategoryCards";
import Header from "@/components/dashboard/categories/Header";
import LineChartCard from "@/components/dashboard/categories/LineChartCard";
import PieChartCard from "@/components/dashboard/categories/PieChartCard";
import SummaryCards from "@/components/dashboard/categories/SummaryCards";
import TransactionsTable from "@/components/dashboard/categories/TransactionsTable";

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-white">
        <Header />
      </div>

      <SummaryCards />
      <CategoryCards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartCard />
        <BarChartCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChartCard />
        <AreaChartCard />
      </div>

      <TransactionsTable />
    </div>
  );
}
