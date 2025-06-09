import BudgetStatusDisplay from './BudgetStatusDisplay';
import TrendsDisplay from './TrendsDisplay';
import CategorizedExpensesDisplay from './CategorizedExpensesDisplay';
import { mockDashboardOverviewData } from '@/app/lib/mockData'; // Assuming data is still mocked here

export default function DashboardOverview() {
  const { budgetStatus, trends, topExpenses } = mockDashboardOverviewData;

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Could also use a grid layout here for larger screens */}
      {/* For example: <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}

      {/* Budget Status - potentially full width or a prominent card */}
      <BudgetStatusDisplay status={budgetStatus} />

      {/* Trends Display - often a wider component */}
      <TrendsDisplay trends={trends} />

      {/* Categorized Expenses - could be alongside other smaller cards or full width */}
      <CategorizedExpensesDisplay expenses={topExpenses} />

      {/* Add more dashboard widgets here as they are developed */}
    </div>
  );
}
