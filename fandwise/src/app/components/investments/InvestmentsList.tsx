import type { InvestmentAccount } from '@/app/lib/types';
import InvestmentCard from './InvestmentCard';

interface InvestmentsListProps {
  investments: InvestmentAccount[];
}

export default function InvestmentsList({ investments }: InvestmentsListProps) {
  if (investments.length === 0) {
    return <p>No investment accounts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {investments.map((investment) => (
        <InvestmentCard key={investment.id} investment={investment} />
      ))}
    </div>
  );
}
