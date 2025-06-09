import type { RecurringTransaction } from '@/app/lib/types';
import { mockCategories, mockAccounts } from '@/app/lib/mockData'; // For category icon & account name

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function RecurringTransactionItem({ item }: RecurringTransactionItemProps) {
  const category = mockCategories.find(c => c.id === item.categoryId);
  const account = mockAccounts.find(a => a.id === item.accountId)?.name || 'N/A';
  const icon = category?.icon || '🔄'; // Default recurring icon

  return (
    <li className="flex items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200">
      <div className="flex-shrink-0 w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-4">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-neutral-800">{item.description}</p>
        <p className="text-sm text-neutral-500">
          Paid from: {account}
        </p>
      </div>
      <div className="text-right ml-4">
        <p className="font-semibold text-lg text-neutral-700">
          ${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-neutral-500">
          Next: {formatDate(item.nextDueDate)}
        </p>
      </div>
    </li>
  );
}
