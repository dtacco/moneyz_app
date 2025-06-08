import type { ExpenseByCategory } from '@/app/lib/types';

interface CategorizedExpensesDisplayProps {
  expenses: ExpenseByCategory[];
}

export default function CategorizedExpensesDisplay({ expenses }: CategorizedExpensesDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Top Expenses by Category</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.categoryId} className="flex justify-between items-center py-1">
            <span>{expense.icon} {expense.categoryName}</span>
            <span>${expense.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
