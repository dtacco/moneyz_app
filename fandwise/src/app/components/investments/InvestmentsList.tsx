import type { InvestmentAccount } from '@/app/lib/types';
import InvestmentCard from './InvestmentCard';

interface InvestmentsListProps {
  investments: InvestmentAccount[];
}

export default function InvestmentsList({ investments }: InvestmentsListProps) {
  if (investments.length === 0) {
    return <p className="text-neutral-500 text-center py-4">No investment accounts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {investments.map((investment) => (
        <InvestmentCard key={investment.id} investment={investment} />
      ))}
    </div>
  );
}
