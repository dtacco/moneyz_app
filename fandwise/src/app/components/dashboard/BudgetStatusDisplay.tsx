import type { BudgetStatus } from '@/app/lib/types';

interface BudgetStatusDisplayProps {
  status: BudgetStatus;
}

export default function BudgetStatusDisplay({ status }: BudgetStatusDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Budget Overview</h3>
      <p>Total Budget: ${status.totalBudget.toLocaleString()}</p>
      <p>Spent: ${status.spentAmount.toLocaleString()}</p>
      <p className={status.remainingAmount >= 0 ? 'text-green-600' : 'text-red-600'}>
        Remaining: ${status.remainingAmount.toLocaleString()}
      </p>
      <p className="mt-1 text-sm font-medium">{status.statusMessage}</p>
    </div>
  );
}
