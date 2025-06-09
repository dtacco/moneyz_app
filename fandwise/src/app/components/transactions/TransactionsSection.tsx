import { mockTransactions } from '@/app/lib/mockData'; // Assuming data is still mocked
import TransactionList from './TransactionList';

export default function TransactionsSection() {
  // This component might have more filters or controls in the future.
  // For now, it just renders the list within the new page structure.
  return (
    <div className="space-y-6">
      <TransactionList transactions={mockTransactions} />
    </div>
  );
}
