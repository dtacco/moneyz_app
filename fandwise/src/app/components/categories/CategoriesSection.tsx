import { mockTransactions, mockCategories } from '@/app/lib/mockData';
import CategoriesList from './CategoriesList';
import type { Category } from '@/app/lib/types';

interface CategorySpending {
  category: Category;
  spentAmount: number;
}

export default function CategoriesSection() {
  const categoriesSpending: CategorySpending[] = mockCategories.map(category => {
    const spentAmount = mockTransactions
      .filter(t => t.categoryId === category.id && t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    return { category, spentAmount };
  }).filter(cs => cs.spentAmount > 0); // Only show categories with spending

  // Calculate total spending to potentially show percentages later
  const totalSpentOverall = categoriesSpending.reduce((sum, cs) => sum + cs.spentAmount, 0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-neutral-200">
      <h3 className="text-xl font-semibold text-neutral-700 mb-6">Spending by Category</h3>
      {categoriesSpending.length > 0 ? (
        <CategoriesList categoriesSpending={categoriesSpending} totalSpentOverall={totalSpentOverall} />
      ) : (
        <p className="text-neutral-500 text-center py-4">No categorized spending data available.</p>
      )}
    </div>
  );
}
