import type { Account } from '@/app/lib/types';
import AccountCard from './AccountCard';

interface AccountsListProps {
  title: string;
  accounts: Account[];
}

export default function AccountsList({ title, accounts }: AccountsListProps) {
  if (accounts.length === 0) {
    return null; // Don't render if no accounts of this type
  }

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
