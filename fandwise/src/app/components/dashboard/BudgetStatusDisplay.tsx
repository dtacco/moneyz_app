import type { BudgetStatus } from '@/app/lib/types';

interface BudgetStatusDisplayProps {
  status: BudgetStatus;
}

export default function BudgetStatusDisplay({ status }: BudgetStatusDisplayProps) {
  const remainingAmountColor = status.remainingAmount >= 0 ? 'text-secondary-dark' : 'text-red-600';

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
      <h3 className="text-xl font-semibold text-neutral-700 mb-4">Budget Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-neutral-500">Total Budget</p>
          <p className="text-2xl font-bold text-neutral-800">${status.totalBudget.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Spent</p>
          <p className="text-2xl font-bold text-neutral-800">${status.spentAmount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-500">Remaining</p>
          <p className={`text-2xl font-bold ${remainingAmountColor}`}>
            ${status.remainingAmount.toLocaleString()}
          </p>
        </div>
      </div>
      <p className={`mt-4 text-sm font-medium text-center ${remainingAmountColor}`}>
        {status.statusMessage}
      </p>
    </div>
  );
}
