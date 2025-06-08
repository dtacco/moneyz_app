import { mockTransactions, mockCategories } from '@/app/lib/mockData';
import CategoriesList from './CategoriesList';
import type { Category, Transaction } from '@/app/lib/types';

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

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Spending by Category</h2>
      <CategoriesList categoriesSpending={categoriesSpending} />
    </div>
  );
}
