import type { MonthlyIncome } from '@/app/lib/types';
import IncomeSourceItem from './IncomeSourceItem';

interface MonthlyIncomeDisplayProps {
  incomeData: MonthlyIncome;
}

export default function MonthlyIncomeDisplay({ incomeData }: MonthlyIncomeDisplayProps) {
  const { totalIncome, incomeSources, targetIncome } = incomeData;
  const progressPercentage = targetIncome && targetIncome > 0 ? Math.min((totalIncome / targetIncome) * 100, 100) : 0;

  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-1">Monthly Income</h3>
      <p className="text-3xl font-bold text-green-600">
        ${totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>

      {targetIncome && (
        <div className="mt-3">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress to Target (${targetIncome.toLocaleString()})</span>
            <span>{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      <h4 className="text-md font-semibold mt-4 mb-2">Income Sources:</h4>
      {incomeSources.length > 0 ? (
        <ul className="divide-y divide-gray-100">
          {incomeSources.map(source => (
            <IncomeSourceItem key={source.id} source={source} />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No income sources logged for this month.</p>
      )}
    </div>
  );
}
