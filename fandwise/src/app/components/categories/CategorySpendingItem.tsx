import type { Category } from '@/app/lib/types';

interface CategorySpendingItemProps {
  category: Category;
  spentAmount: number;
  percentage: number;
}

export default function CategorySpendingItem({ category, spentAmount, percentage }: CategorySpendingItemProps) {
  return (
    <li className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{category.icon || '📁'}</span>
          <p className="font-semibold text-neutral-700">{category.name}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-lg text-neutral-800">
            ${spentAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-neutral-500">
            {percentage.toFixed(1)}% of total
          </p>
        </div>
      </div>
      {/* Basic progress bar */}
      <div className="w-full bg-neutral-200 rounded-full h-2 mt-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${Math.max(5, percentage)}%` }} // Ensure even small percentages are visible
        ></div>
      </div>
    </li>
  );
}
