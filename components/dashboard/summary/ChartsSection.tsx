import IncomeExpenseChart from "./charts/IncomeExpenseChart";
import WeeklyCashflowChart from "./charts/WeeklyCashflowChart";
import CategoryPieChart from "./charts/CategoryPieChart";
import MonthlyCashflowChart from "./charts/MonthlyCashflowChart";

export default function ChartsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <IncomeExpenseChart />
      <WeeklyCashflowChart />
      <CategoryPieChart />
      <MonthlyCashflowChart />
    </div>
  );
}
