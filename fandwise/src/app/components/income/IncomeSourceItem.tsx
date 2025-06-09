import type { IncomeSource } from '@/app/lib/types';

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function IncomeSourceItem({ source }: IncomeSourceItemProps) {
  return (
    <li className="flex justify-between items-center py-3 px-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-100">
      <div>
        <p className="font-medium text-neutral-700">{source.name}</p>
        {source.dateReceived && (
          <p className="text-xs text-neutral-500">
            Received: {formatDate(source.dateReceived)}
          </p>
        )}
      </div>
      <p className="font-semibold text-lg text-secondary-dark"> {/* Using secondary color for income amounts */}
        +${source.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </li>
  );
}
