import { mockRecurringTransactions } from '@/app/lib/mockData';
import RecurringTransactionsList from './RecurringTransactionsList';

export default function RecurringsSection() {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Upcoming Recurring Transactions</h2>
      <RecurringTransactionsList transactions={mockRecurringTransactions} showOnlyActive={true} />
      {/* Could add a toggle here to show inactive or all recurring transactions */}
    </div>
  );
}
