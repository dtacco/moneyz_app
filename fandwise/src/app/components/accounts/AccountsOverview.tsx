import { mockAccounts } from '@/app/lib/mockData';
import AccountsList from './AccountsList';
import type { Account, CreditCardAccount, DepositoryAccount, InvestmentAccount } from '@/app/lib/types';

export default function AccountsOverview() {
  const creditCards = mockAccounts.filter(acc => acc.type === 'credit-card') as CreditCardAccount[];
  const depositoryAccounts = mockAccounts.filter(acc => acc.type === 'depository') as DepositoryAccount[];
  const investmentAccounts = mockAccounts.filter(acc => acc.type === 'investment') as InvestmentAccount[];

  return (
    <div className="p-4 border rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold mb-4">Accounts Overview</h2>
      <AccountsList title="Credit Cards" accounts={creditCards} />
      <AccountsList title="Depository Accounts" accounts={depositoryAccounts} />
      <AccountsList title="Investment Accounts" accounts={investmentAccounts} />
    </div>
  );
}
