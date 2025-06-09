import type { InvestmentAccount } from '@/app/lib/types';

interface InvestmentCardProps {
  investment: InvestmentAccount;
}

export default function InvestmentCard({ investment }: InvestmentCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold text-neutral-800">{investment.name}</h4>
        {/* Placeholder for an icon, e.g., institution logo */}
        {/* <span className="text-xl">💰</span> */}
      </div>
      <p className="text-2xl font-bold text-neutral-700 mb-1">
        ${investment.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <p className="text-xs text-neutral-500 capitalize mb-3">
        Institution: {investment.institution}
      </p>
      {/* Placeholder for future details like performance (e.g., +X.XX% today) or top holdings */}
      {/* <div className="mt-2 pt-2 border-t border-neutral-100">
        <p className="text-sm text-green-600">+1.25% today</p>
      </div> */}
    </div>
  );
}
