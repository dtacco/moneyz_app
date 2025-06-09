import { mockAccounts } from '@/app/lib/mockData';
import InvestmentsList from './InvestmentsList';
import type { InvestmentAccount } from '@/app/lib/types';

export default function InvestmentsSection() {
  const investmentAccounts = mockAccounts.filter(
    acc => acc.type === 'investment'
  ) as InvestmentAccount[];

  const totalPortfolioValue = investmentAccounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
        <h3 className="text-xl font-semibold text-neutral-700 mb-1">Total Portfolio Value</h3>
        <p className="text-3xl font-bold text-neutral-800">
          ${totalPortfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        {/* Placeholder for overall portfolio performance chart or summary if desired later */}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-neutral-700 mb-6">Investment Accounts</h3>
        <InvestmentsList investments={investmentAccounts} />
      </div>
    </div>
  );
}
