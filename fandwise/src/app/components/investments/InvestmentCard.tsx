import type { InvestmentAccount } from '@/app/lib/types';

interface InvestmentCardProps {
  investment: InvestmentAccount;
}

export default function InvestmentCard({ investment }: InvestmentCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-md font-semibold">{investment.name}</h4>
      <p className="text-xl font-bold">${investment.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      <p className="text-xs text-gray-500">Institution: {investment.institution}</p>
      {/* Placeholder for future details like portfolio value tracking charts or top movers */}
    </div>
  );
}
