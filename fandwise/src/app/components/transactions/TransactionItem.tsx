import type { Transaction } from '@/app/lib/types';
import { mockCategories } from '@/app/lib/mockData'; // To get category name

interface TransactionItemProps {
  transaction: Transaction;
}

const getCategoryName = (categoryId: string) => {
  const category = mockCategories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Uncategorized';
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const amountColor = transaction.amount < 0 ? 'text-neutral-700' : 'text-secondary-dark'; // Expenses are neutral, income is green
  const categoryName = getCategoryName(transaction.categoryId);
  const statusColor = transaction.status === 'pending' ? 'text-amber-600' : 'text-neutral-500';

  return (
    <li className="flex flex-col sm:flex-row justify-between sm:items-center py-4 px-1 sm:px-3 hover:bg-neutral-50 transition-colors">
      <div className="flex-grow mb-2 sm:mb-0">
        <p className="font-semibold text-neutral-800">{transaction.description}</p>
        <div className="text-sm text-neutral-500 flex flex-wrap">
          <span>{formatDate(transaction.date)}</span>
          <span className="mx-1 sm:mx-2">|</span>
          <span>{categoryName}</span>
          {transaction.tags && transaction.tags.length > 0 && (
            <>
              <span className="mx-1 sm:mx-2">|</span>
              <span className="text-xs bg-neutral-200 text-neutral-600 px-1.5 py-0.5 rounded-full">
                {transaction.tags.join(', ')}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex sm:flex-col items-end justify-between sm:w-auto sm:min-w-[120px]">
        <p className={`font-semibold text-lg ${amountColor}`}>
          {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className={`text-xs sm:text-sm capitalize ${statusColor}`}>{transaction.status}</p>
      </div>
    </li>
  );
}
