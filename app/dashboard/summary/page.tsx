import ChartsSection from "@/components/dashboard/summary/ChartsSection";
import FinancialHealth from "@/components/dashboard/summary/FinancialHealth";
import Insights from "@/components/dashboard/summary/Insights";
import Metrics from "@/components/dashboard/summary/Metrics";
import StatsCards from "@/components/dashboard/summary/StatsCards";
import SummaryCards from "@/components/dashboard/summary/SummaryCards";
import SummaryHeader from "@/components/dashboard/summary/SummaryHeader";

export default function SummaryPage() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-white">
        <SummaryHeader />
      </div>

      <SummaryCards />

      <StatsCards />

      <FinancialHealth />

      <ChartsSection />

      <Insights />

      <Metrics />
    </div>
  );
}
