import type { Category } from '@/app/lib/types';
import CategorySpendingItem from './CategorySpendingItem';

interface CategorySpending {
  category: Category;
  spentAmount: number;
}

interface CategoriesListProps {
  categoriesSpending: CategorySpending[];
}

export default function CategoriesList({ categoriesSpending }: CategoriesListProps) {
  if (categoriesSpending.length === 0) {
    return <p>No spending data by category available.</p>;
  }

  // Sort by spent amount, descending
  const sortedCategories = [...categoriesSpending].sort((a, b) => b.spentAmount - a.spentAmount);

  return (
    <ul className="divide-y divide-gray-200">
      {sortedCategories.map(({ category, spentAmount }) => (
        <CategorySpendingItem key={category.id} category={category} spentAmount={spentAmount} />
      ))}
    </ul>
  );
}
