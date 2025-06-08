import { mockTransactions } from '@/app/lib/mockData';
import TransactionList from './TransactionList';

export default function TransactionsSection() {
  return (
    <div>
      <TransactionList transactions={mockTransactions} />
    </div>
  );
}
