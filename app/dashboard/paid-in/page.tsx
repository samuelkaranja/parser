import Header from "@/components/dashboard/paidin/Header";
import IncomeChart from "@/components/dashboard/paidin/IncomeChart";
import StatsSection from "@/components/dashboard/paidin/StatsSection";
import TopSendersChart from "@/components/dashboard/paidin/TopSendersChart";
import TransactionsTable from "@/components/dashboard/paidin/TransactionsTable";

export default function PaidInPage() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-white">
        <Header />
      </div>

      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeChart />
        <TopSendersChart />
      </div>

      <TransactionsTable />
    </div>
  );
}
