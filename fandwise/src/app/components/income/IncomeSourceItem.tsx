import type { IncomeSource } from '@/app/lib/types';

interface IncomeSourceItemProps {
  source: IncomeSource;
}

export default function IncomeSourceItem({ source }: IncomeSourceItemProps) {
  return (
    <li className="flex justify-between items-center py-2">
      <div>
        <p className="font-medium">{source.name}</p>
        {source.dateReceived && (
          <p className="text-sm text-gray-500">
            Received: {new Date(source.dateReceived).toLocaleDateString()}
          </p>
        )}
      </div>
      <p className="font-semibold text-green-600">
        +${source.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </li>
  );
}
