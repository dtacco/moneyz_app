import type { RecurringTransaction } from '@/app/lib/types';
import RecurringTransactionItem from './RecurringTransactionItem';

interface RecurringTransactionsListProps {
  transactions: RecurringTransaction[];
  showOnlyActive?: boolean;
}

export default function RecurringTransactionsList({ transactions, showOnlyActive = true }: RecurringTransactionsListProps) {
  const itemsToList = showOnlyActive ? transactions.filter(t => t.isActive) : transactions;

  if (itemsToList.length === 0) {
    return <p>No {showOnlyActive ? 'active ' : ''}recurring transactions found.</p>;
  }

  // Sort by next due date
  const sortedItems = [...itemsToList].sort((a,b) => new Date(a.nextDueDate).getTime() - new Date(b.nextDueDate).getTime());

  return (
    <ul className="divide-y divide-gray-200">
      {sortedItems.map((item) => (
        <RecurringTransactionItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
