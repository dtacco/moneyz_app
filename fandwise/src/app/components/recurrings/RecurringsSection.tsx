import { mockRecurringTransactions } from '@/app/lib/mockData';
import RecurringTransactionsList from './RecurringTransactionsList';

export default function RecurringsSection() {
  const activeTransactions = mockRecurringTransactions.filter(t => t.isActive);
  // Potentially calculate total amount for upcoming active recurrings
  const totalUpcomingAmount = activeTransactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-neutral-200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-700">Upcoming Recurring Transactions</h3>
        {activeTransactions.length > 0 && (
          <p className="text-sm text-neutral-500">
            Total for upcoming active items: ${totalUpcomingAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        )}
      </div>
      <RecurringTransactionsList transactions={activeTransactions} />
      {/* Could add a toggle here to show inactive or all recurring transactions later */}
    </div>
  );
}
