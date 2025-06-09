import type { ExpenseByCategory } from '@/app/lib/types';

interface CategorizedExpensesDisplayProps {
  expenses: ExpenseByCategory[];
}

export default function CategorizedExpensesDisplay({ expenses }: CategorizedExpensesDisplayProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
      <h3 className="text-xl font-semibold text-neutral-700 mb-4">Top Expenses by Category</h3>
      {expenses.length > 0 ? (
        <ul className="space-y-3">
          {expenses.map((expense) => (
            <li
              key={expense.categoryId}
              className="flex justify-between items-center py-2 px-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{expense.icon || '📁'}</span>
                <span className="text-neutral-600 font-medium">{expense.categoryName}</span>
              </div>
              <span className="font-semibold text-neutral-700">${expense.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-500">No expense data for this period.</p>
      )}
    </div>
  );
}
