import { mockDashboardOverviewData } from '@/app/lib/mockData';
import BudgetStatusDisplay from './BudgetStatusDisplay';
import TrendsDisplay from './TrendsDisplay';
import CategorizedExpensesDisplay from './CategorizedExpensesDisplay';

export default function DashboardOverview() {
  const { budgetStatus, trends, topExpenses } = mockDashboardOverviewData;

  return (
    <div className="space-y-6">
      <BudgetStatusDisplay status={budgetStatus} />
      <TrendsDisplay trends={trends} />
      <CategorizedExpensesDisplay expenses={topExpenses} />
    </div>
  );
}
