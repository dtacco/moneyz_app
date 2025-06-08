import { mockMonthlyIncome } from '@/app/lib/mockData';
import MonthlyIncomeDisplay from './MonthlyIncomeDisplay';

export default function IncomeSection() {
  return (
    <div>
      <MonthlyIncomeDisplay incomeData={mockMonthlyIncome} />
    </div>
  );
}
