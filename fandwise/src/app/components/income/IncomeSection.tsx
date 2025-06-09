import { mockMonthlyIncome } from '@/app/lib/mockData';
import MonthlyIncomeDisplay from './MonthlyIncomeDisplay';

export default function IncomeSection() {
  // This component primarily acts as a wrapper for MonthlyIncomeDisplay.
  // It could include date pickers or other controls in a future iteration.
  return (
    <div>
      <MonthlyIncomeDisplay incomeData={mockMonthlyIncome} />
    </div>
  );
}
