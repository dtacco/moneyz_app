import type { Transaction, Category } from '@/app/lib/types';
import { mockCategories } from '@/app/lib/mockData'; // To get category name

interface TransactionItemProps {
  transaction: Transaction;
}

const getCategoryName = (categoryId: string) => {
  const category = mockCategories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Uncategorized';
};

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const amountColor = transaction.amount < 0 ? 'text-red-600' : 'text-green-600';
  const categoryName = getCategoryName(transaction.categoryId);

  return (
    <li className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
      <div>
        <p className="font-semibold">{transaction.description}</p>
        <p className="text-sm text-gray-600">
          {new Date(transaction.date).toLocaleDateString()} - {categoryName}
          {transaction.tags && transaction.tags.length > 0 && (
            <span className="ml-2 text-xs bg-gray-200 p-1 rounded">
              {transaction.tags.join(', ')}
            </span>
          )}
        </p>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${amountColor}`}>
          {transaction.amount < 0 ? '-' : ''}${Math.abs(transaction.amount).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
        </p>
        <p className="text-sm text-gray-500 capitalize">{transaction.status}</p>
      </div>
    </li>
  );
}
