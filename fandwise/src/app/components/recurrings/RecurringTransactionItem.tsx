import type { RecurringTransaction } from '@/app/lib/types';
import { mockCategories, mockAccounts } from '@/app/lib/mockData';

interface RecurringTransactionItemProps {
  item: RecurringTransaction;
}

export default function RecurringTransactionItem({ item }: RecurringTransactionItemProps) {
  const category = mockCategories.find(c => c.id === item.categoryId)?.name || 'N/A';
  const account = mockAccounts.find(a => a.id === item.accountId)?.name || 'N/A';

  return (
    <li className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
      <div>
        <p className="font-semibold">{item.description}</p>
        <p className="text-sm text-gray-600">
          Next Due: {new Date(item.nextDueDate).toLocaleDateString()} | Category: {category}
        </p>
        <p className="text-xs text-gray-500">
          Amount: ${item.amount.toFixed(2)} | Frequency: {item.frequency} | Account: {account}
        </p>
      </div>
      {item.isActive ? (
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
      ) : (
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Inactive</span>
      )}
    </li>
  );
}
