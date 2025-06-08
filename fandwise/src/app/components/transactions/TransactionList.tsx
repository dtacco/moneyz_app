import type { Transaction } from '@/app/lib/types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          onClick={() => alert('Bulk action: Mark all as reviewed (not implemented yet)')}
        >
          Mark all as reviewed
        </button>
      </div>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
}
