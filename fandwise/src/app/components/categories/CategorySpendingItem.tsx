import type { Category } from '@/app/lib/types';

interface CategorySpendingItemProps {
  category: Category;
  spentAmount: number;
}

export default function CategorySpendingItem({ category, spentAmount }: CategorySpendingItemProps) {
  return (
    <li className="flex items-center justify-between p-3 border-b hover:bg-gray-50">
      <div className="flex items-center">
        <span className="text-2xl mr-3">{category.icon || '📁'}</span>
        <div>
          <p className="font-semibold">{category.name}</p>
          {/* Additional details like budget vs actual could go here later */}
        </div>
      </div>
      <p className="font-semibold text-red-600">
        ${spentAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </li>
  );
}
