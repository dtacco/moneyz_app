import type { RecurringTransaction } from '@/app/lib/types';
import RecurringTransactionItem from './RecurringTransactionItem';

interface RecurringTransactionsListProps {
  transactions: RecurringTransaction[];
  // showOnlyActive prop is effectively handled by filtering in RecurringsSection now
}

export default function RecurringTransactionsList({ transactions }: RecurringTransactionsListProps) {
  if (transactions.length === 0) {
    return <p className="text-neutral-500 text-center py-4">No active recurring transactions found.</p>;
  }

  // Sort by next due date
  const sortedItems = [...transactions].sort((a,b) => new Date(a.nextDueDate).getTime() - new Date(b.nextDueDate).getTime());

  return (
    <ul className="space-y-4">
      {sortedItems.map((item) => (
        <RecurringTransactionItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
