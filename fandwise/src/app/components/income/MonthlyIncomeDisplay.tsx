import type { MonthlyIncome } from '@/app/lib/types';
import IncomeSourceItem from './IncomeSourceItem';

interface MonthlyIncomeDisplayProps {
  incomeData: MonthlyIncome;
}

export default function MonthlyIncomeDisplay({ incomeData }: MonthlyIncomeDisplayProps) {
  const { totalIncome, incomeSources, targetIncome } = incomeData;
  const progressPercentage = targetIncome && targetIncome > 0 ? Math.min((totalIncome / targetIncome) * 100, 100) : 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-neutral-500 mb-1">Total Monthly Income</h3>
        <p className="text-4xl font-bold text-secondary-dark"> {/* Using secondary color for income */}
          ${totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      {targetIncome && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-neutral-600 mb-1">
            <span>Progress to Target (${targetIncome.toLocaleString()})</span>
            <span>{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-3">
            <div
              className="bg-secondary h-3 rounded-full transition-width duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      <div>
        <h4 className="text-lg font-semibold text-neutral-700 mb-4">Income Sources:</h4>
        {incomeSources.length > 0 ? (
          <ul className="space-y-3">
            {incomeSources.map(source => (
              <IncomeSourceItem key={source.id} source={source} />
            ))}
          </ul>
        ) : (
          <p className="text-sm text-neutral-500 text-center py-3">No income sources logged for this month.</p>
        )}
      </div>
    </div>
  );
}
