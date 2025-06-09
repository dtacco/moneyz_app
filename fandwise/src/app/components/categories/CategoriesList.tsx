import type { Category } from '@/app/lib/types';
import CategorySpendingItem from './CategorySpendingItem';

interface CategorySpending {
  category: Category;
  spentAmount: number;
}

interface CategoriesListProps {
  categoriesSpending: CategorySpending[];
  totalSpentOverall: number; // To calculate percentage
}

export default function CategoriesList({ categoriesSpending, totalSpentOverall }: CategoriesListProps) {
  // Sort by spent amount, descending
  const sortedCategories = [...categoriesSpending].sort((a, b) => b.spentAmount - a.spentAmount);

  return (
    <ul className="space-y-4">
      {sortedCategories.map(({ category, spentAmount }) => (
        <CategorySpendingItem
          key={category.id}
          category={category}
          spentAmount={spentAmount}
          percentage={totalSpentOverall > 0 ? (spentAmount / totalSpentOverall) * 100 : 0}
        />
      ))}
    </ul>
  );
}
