import { mockAccounts } from '@/app/lib/mockData';
import InvestmentsList from './InvestmentsList';
import type { InvestmentAccount } from '@/app/lib/types';

export default function InvestmentsSection() {
  // Ensure that we only pass InvestmentAccount types
  const investmentAccounts = mockAccounts.filter(
    acc => acc.type === 'investment'
  ) as InvestmentAccount[];

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Investments</h2>
      <InvestmentsList investments={investmentAccounts} />
      {/* Placeholder for overall portfolio value tracking elements */}
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p className="text-sm text-gray-700">Overall Portfolio Value (Placeholder): $
          {investmentAccounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}
