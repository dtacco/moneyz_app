import type { Transaction } from '@/app/lib/types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-neutral-200">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
        <h3 className="text-xl font-semibold text-neutral-700 mb-2 sm:mb-0">Recent Transactions</h3>
        <button
          className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light"
          onClick={() => alert('Bulk action: Mark all as reviewed (not implemented yet)')}
        >
          Mark all as reviewed
        </button>
      </div>
      {transactions.length === 0 ? (
        <p className="text-neutral-500 text-center py-4">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <ul className="min-w-full divide-y divide-neutral-200">
            {/* Optional: Add a header row here if desired for table-like appearance */}
            {/* <li className="flex justify-between items-center py-2 px-3 text-xs font-semibold text-neutral-500">
                  <span className="w-1/3">Description</span>
                  <span className="w-1/4 text-right">Amount</span>
                  <span className="w-1/4 text-right">Status</span>
            </li> */}
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
