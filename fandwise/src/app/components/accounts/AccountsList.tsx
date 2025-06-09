import type { Account } from '@/app/lib/types';
import AccountCard from './AccountCard';

interface AccountsListProps {
  title: string;
  accounts: Account[];
}

export default function AccountsList({ title, accounts }: AccountsListProps) {
  if (accounts.length === 0) {
    // Optionally render a message if no accounts of this type, or just nothing
    return (
      <div>
        <h3 className="text-2xl font-semibold text-neutral-700 mb-4">{title}</h3>
        <p className="text-neutral-500">No {title.toLowerCase()} found.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-neutral-700 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
